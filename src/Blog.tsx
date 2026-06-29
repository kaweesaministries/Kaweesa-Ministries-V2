import { Helmet } from 'react-helmet-async';
import { useState, useMemo } from 'react';
import PageHeader from './components/PageHeader';
import { Link } from 'react-router-dom';
import { FileText, Search, ArrowRight } from 'lucide-react';
import { blogPosts } from './data/blogPosts';

const Blog = () => {

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // ⚡ Bolt: Memoize the filtered posts to prevent O(N) recalculations on every render
  const filteredPosts = useMemo(() => blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.metaDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }), [selectedCategory, searchQuery]);

  const categories = ['All', 'Education', 'Health', 'Protection', 'Empowerment'];

  return (
    <>
      <Helmet>
        <title>Impact & Success Stories Blog | KAWEESA CHILDREN'S MINISTRIES</title>
        <meta name="description" content="Read our latest stories of impact, success stories from God’s Grace Primary School, and NGO updates from our communities in Uganda." />
        <link rel="canonical" href="https://kaweesachildrensministries.org/blog" />
      </Helmet>
      <div className="min-h-screen bg-white">
      <PageHeader
        title="Impact & Insights"
        subtitle="Stories and updates from our mission in Uganda"
        bgImage="https://pub-e17241423b304f39aba75c11baa88527.r2.dev/kaweesacharitypics/KAWEESA%20CHILDREN'S%20MINISTRIES%20(36).jpeg"
      />
      <section className="py-24 px-6 max-w-7xl mx-auto">

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-full w-full md:w-64 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-2/3 space-y-12">
            <h2 className="font-display text-3xl mb-8">
              {selectedCategory === 'All' ? 'Latest Stories' : `Stories in ${selectedCategory}`}
            </h2>

            {filteredPosts.length > 0 ? (
              filteredPosts.map((article) => (
                <div key={article.slug} className="flex flex-col sm:flex-row gap-8 group cursor-pointer border-b border-gray-100 pb-12 last:border-0">
                  <div className="w-full sm:w-64 h-48 rounded-2xl overflow-hidden flex-shrink-0 relative">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                      {article.country}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                      <span>{article.publishedDate}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-bold text-2xl mb-3 group-hover:text-primary transition-colors">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{article.metaDescription}</p>
                    <Link to={`/blog/${article.slug}`} className="text-primary font-bold text-sm uppercase tracking-wider hover:opacity-70 inline-flex items-center gap-2 group/link">
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-3xl">
                <p className="text-gray-500 font-medium">No stories found matching your criteria.</p>
                <button
                  onClick={() => {setSelectedCategory('All'); setSearchQuery('');}}
                  className="mt-4 text-primary font-bold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          <div className="w-full md:w-1/3 space-y-8 sticky top-24 h-fit">
            <div className="bg-gray-50 p-8 rounded-3xl">
              <h3 className="font-bold text-xl mb-6">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                {['Education', 'Health Care', 'Community', 'Child Protection', 'Success Stories', 'Empowerment', 'Uganda', 'NGO News'].map(tag => (
                  <span key={tag} className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-xs font-bold text-gray-600 hover:border-primary hover:text-primary cursor-pointer transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-3xl">
                <h3 className="font-bold text-xl mb-4">Support Resources</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 pb-4 border-b border-white/10 last:border-0 last:pb-0 cursor-pointer hover:opacity-80">
                    <div className="bg-white/10 p-2 rounded-lg"><FileText className="w-5 h-5" /></div>
                    <div>
                      <p className="font-bold text-sm">Ministry Profile</p>
                      <p className="text-xs text-white/60">PDF • 1.2 MB</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 pb-4 border-b border-white/10 last:border-0 last:pb-0 cursor-pointer hover:opacity-80">
                    <div className="bg-white/10 p-2 rounded-lg"><FileText className="w-5 h-5" /></div>
                    <div>
                      <p className="font-bold text-sm">Impact Report 2024</p>
                      <p className="text-xs text-white/60">PDF • 3.5 MB</p>
                    </div>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </section>
    </div>    </>

  );
};

export default Blog;
