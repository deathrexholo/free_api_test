const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

const SOURCES = [
  {
    name: 'BBC Sport',
    url: 'https://www.bbc.com/sport',
    category: 'General',
    selector: '.ssrcss-1rv6487-Stack a', // This is a placeholder, will refine
  }
];

app.get('/api/news', async (req, res) => {
  try {
    const newsItems = [];
    
    // Scrape BBC Sport as an example
    const response = await axios.get('https://www.bbc.com/sport');
    const html = response.data;
    const $ = cheerio.load(html);

    // Finding news titles and links
    // Note: CSS selectors change frequently, this is for demonstration
    $('a').each((i, el) => {
      const title = $(el).find('h3').text().trim();
      const link = $(el).attr('href');
      
      if (title && link && newsItems.length < 10) {
        const fullLink = link.startsWith('http') ? link : `https://www.bbc.com${link}`;
        
        // Basic filtering to avoid duplicates and non-news items
        if (!newsItems.find(item => item.title === title)) {
            newsItems.push({
                id: Math.random().toString(36).substr(2, 9),
                title,
                summary: 'Latest sports update from BBC Sport.',
                url: fullLink,
                source: 'BBC Sport',
                imageUrl: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800&auto=format&fit=crop',
                publishedAt: 'Recently',
                category: 'Other'
            });
        }
      }
    });

    res.json(newsItems);
  } catch (error) {
    console.error('Error scraping news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
