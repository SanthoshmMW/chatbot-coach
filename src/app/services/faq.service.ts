import { Injectable } from '@angular/core';

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private faqs: FAQ[] = [
    // LMX Platform Overview
    {
      question: "What is the LMX platform?",
      answer: "LMX (location media xchange) is an OOH (Out-of-Home) technology platform designed to empower media owners. It helps you streamline your inventory management, automate campaign bookings, and maximize revenue from your advertising assets like billboards.",
      category: "Platform Overview"
    },
    {
      question: "Who is the LMX platform for?",
      answer: "The platform is designed for OOH media owners who manage advertising assets such as digital billboards, classic billboards, and ads on taxis, buses, trains, and other formats.",
      category: "Platform Overview"
    },
    
    // Login and Access
    {
      question: "How do I log into my account?",
      answer: "To log in, go to the main login screen, enter your assigned Username and Password into the respective fields, and click the 'Login' button.",
      category: "Login and Access"
    },
    {
      question: "What is the first thing I see after I log in?",
      answer: "After a successful login, you will land on the 'EARNINGS OVERVIEW' dashboard. This page gives you a summary of your financial performance with metrics like Month-to-Date (MTD), Quarter-to-Date (QTD), and Year-to-Date (YTD) earnings.",
      category: "Login and Access"
    },
    
    // Billboard Management
    {
      question: "Where can I find a list of all my billboards?",
      answer: "You can find all your advertising assets in the 'Registry.' To get there, click on 'Registry' in the main menu on the left, and then select 'Billboard List.'",
      category: "Billboard Management"
    },
    {
      question: "What kind of information can I see in the Billboard List?",
      answer: "The 'Billboard List' shows your complete portfolio, including the display name, GPS coordinates, resolution, size, and current status (e.g., Active, Inactive). You can filter between asset types like Digital, Classic, and Network.",
      category: "Billboard Management"
    },
    {
      question: "How can I view the specific details and location of a single billboard?",
      answer: "From the 'Billboard List,' simply click on the billboard you want to examine. This will open a detailed view showing its exact location on a map, site owner, specifications, and other attributes.",
      category: "Billboard Management"
    },
    
    // Pricing and Rates
    {
      question: "How do I change the price for one of my billboards?",
      answer: "First, navigate to the detailed view of the billboard you want to edit. Click the 'Edit' button, and then use the navigation bar at the top to select either 'Traditional Rate' (for fixed pricing) or 'Programmatic Rate' (for automated sales pricing).",
      category: "Pricing and Rates"
    },
    {
      question: "What is a Traditional Rate?",
      answer: "The 'Traditional Rate' section is where you set your standard, fixed prices. You can define rates for different durations, such as Monthly, Weekly, Daily, and per SPOT.",
      category: "Pricing and Rates"
    },
    {
      question: "What is a Programmatic Rate?",
      answer: "The 'Programmatic Rate' section is for setting up pricing for automated ad sales. Here, you can define rates (like eCPM) for different 'Deal Types,' such as Programmatic Guaranteed, Preferred Deals, and Open Auctions.",
      category: "Pricing and Rates"
    },
    {
      question: "How does the platform help me set the best price?",
      answer: "The LMX platform features an intelligent pricing engine. It can provide 'AI-informed rate adjustments' and 'optimal pricing details based on location analytics' to help you refine your strategy and maximize your billboard's earning potential.",
      category: "Pricing and Rates"
    },
    {
      question: "How do I save my changes after updating a billboard's price?",
      answer: "After entering the new rates on either the 'Traditional Rate' or 'Programmatic Rate' page, scroll down and click the 'Update & Proceed' button to save your changes and apply the new pricing strategy.",
      category: "Pricing and Rates"
    },
    
    // Tags Management
    {
      question: "How do I create a new tag to organize my billboards?",
      answer: "To create a new tag, first navigate to the 'Configuration' section in the left-hand menu. From there, click on 'Tags'. On the Tags page, click the 'Add New Tag' button. In the pop-up window, you'll need to enter a 'Tag Name', select a color 'Swatch' for easy identification, and choose the 'Integration' level (e.g., 'Billboard Level'). Finally, click 'Save' to create the tag.",
      category: "Tags Management"
    },
    {
      question: "How can I apply an existing tag to one of my billboards?",
      answer: "First, go to the 'Registry' section in the main menu and select 'Billboard List'. Find the billboard you want to tag and click on it to open its details. Click the 'Edit' button. On the first 'Location' step of the editing wizard, scroll down to the 'Details' section. Click on the 'Select Tag' dropdown menu, choose the tag you wish to apply, and then click 'Update & Proceed' to save the change.",
      category: "Tags Management"
    },
    {
      question: "How do I filter my billboard list to see only the billboards with a specific tag?",
      answer: "From the 'My Billboards' page, click on the 'Apply Filters' button. A filter menu will appear. Scroll down to the 'Select Tag' section and check the box next to the tag you want to filter by. Click the 'Apply' button at the bottom of the menu to update your billboard list.",
      category: "Tags Management"
    },
    {
      question: "Where can I find the Tags management page?",
      answer: "You can find the 'Tags' management page by clicking on 'Configuration' in the left-side navigation panel. A sub-menu will appear, and from there, you can select 'Tags'.",
      category: "Tags Management"
    },
    {
      question: "After adding a tag to a billboard, do I need to save all the other steps in the Edit Billboard wizard?",
      answer: "Yes. After you select the tag on the 'Location' step, you need to click 'Update & Proceed' through each subsequent step ('Specifications', 'Add Media', 'Configurations', 'Traditional Rate', 'Programmatic Rate') to ensure your changes are fully saved and you are returned to the billboard list.",
      category: "Tags Management"
    },
    
    // Additional Information
    {
      question: "What types of OOH media can I manage with this platform?",
      answer: "The platform supports various OOH media types including digital billboards, classic billboards, taxi ads, bus ads, train ads, fleet advertising, and street furniture.",
      category: "Platform Features"
    }
  ];

  constructor() { }

  getAllFAQs(): FAQ[] {
    return this.faqs;
  }

  searchFAQs(query: string): FAQ[] {
    if (!query || query.trim() === '') {
      return [];
    }

    const searchTerm = query.toLowerCase().trim();
    
    return this.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm) ||
      faq.answer.toLowerCase().includes(searchTerm) ||
      (faq.category && faq.category.toLowerCase().includes(searchTerm))
    );
  }

  getCategories(): string[] {
    const categories = new Set(this.faqs.map(faq => faq.category).filter(cat => cat !== undefined));
    return Array.from(categories) as string[];
  }

  getFAQsByCategory(category: string): FAQ[] {
    return this.faqs.filter(faq => faq.category === category);
  }
}
