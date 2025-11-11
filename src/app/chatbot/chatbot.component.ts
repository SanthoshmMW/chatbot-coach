import { Component, OnInit } from '@angular/core';
import { FaqService, FAQ } from '../services/faq.service';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
  faqs?: FAQ[];
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  messages: Message[] = [];
  userInput: string = '';
  categories: string[] = [];
  isChatOpen: boolean = false;
  isTyping: boolean = false;

  constructor(private faqService: FaqService) { }

  ngOnInit() {
    this.categories = this.faqService.getCategories();
    this.addBotMessage('Hello! I\'m MW Coach, your assistant for the LMX platform. How can I help you today?');
    this.addBotMessage('You can ask me questions about the platform, or browse by category below.');
  }

  sendMessage() {
    if (!this.userInput.trim()) {
      return;
    }

    const userMessage = this.userInput.trim();
    this.addUserMessage(userMessage);
    this.userInput = '';

    // Simulate typing
    this.isTyping = true;
    
    setTimeout(() => {
      this.processUserMessage(userMessage);
      this.isTyping = false;
    }, 500);
  }

  processUserMessage(message: string) {
    const lowerMessage = message.toLowerCase();

    // Check for greetings
    if (lowerMessage.match(/^(hi|hello|hey|greetings)/)) {
      this.addBotMessage('Hello! How can I assist you with the LMX platform today?');
      return;
    }

    // Check for help or menu
    if (lowerMessage.match(/(help|menu|options|what can you do)/)) {
      this.showMainMenu();
      return;
    }

    // Check for category browsing
    if (lowerMessage.match(/(categories|topics|browse)/)) {
      this.showCategories();
      return;
    }

    // Search FAQs
    const results = this.faqService.searchFAQs(message);
    
    if (results.length > 0) {
      this.addBotMessageWithFAQs(`I found ${results.length} answer(s) related to your question:`, results);
    } else {
      this.addBotMessage('I couldn\'t find an exact match for your question. Here are some ways I can help:');
      this.showMainMenu();
    }
  }

  showMainMenu() {
    const menuMessage = `Here's what I can help you with:
    
• Platform Overview
• Login and Access
• Billboard Management
• Pricing and Rates
• Tags Management
• Platform Features

Just type a category name or ask me a specific question!`;
    
    this.addBotMessage(menuMessage);
  }

  showCategories() {
    const categoryList = this.categories.join('\n• ');
    this.addBotMessage(`Available categories:\n\n• ${categoryList}\n\nClick on a category or type its name to see related FAQs.`);
  }

  selectCategory(category: string) {
    const faqs = this.faqService.getFAQsByCategory(category);
    this.addUserMessage(`Show me FAQs about ${category}`);
    
    setTimeout(() => {
      this.addBotMessageWithFAQs(`Here are the FAQs for ${category}:`, faqs);
    }, 300);
  }

  addUserMessage(text: string) {
    this.messages.push({
      text: text,
      isUser: true,
      timestamp: new Date()
    });
    this.scrollToBottom();
  }

  addBotMessage(text: string) {
    this.messages.push({
      text: text,
      isUser: false,
      timestamp: new Date()
    });
    this.scrollToBottom();
  }

  addBotMessageWithFAQs(text: string, faqs: FAQ[]) {
    this.messages.push({
      text: text,
      isUser: false,
      timestamp: new Date(),
      faqs: faqs
    });
    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout(() => {
      const chatContainer = document.querySelector('.chat-messages');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }, 100);
  }

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
}
