import { Card, CardContent } from './ui/card';

export function Team() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder Story */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            About Dudat Sales & Marketing
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Founded in 2020, Dudat Sales & Marketing was created by <strong className="text-yellow-400">Duda Marthaus</strong>, who was born in Brazil and later moved to Dallas, Texas, where she graduated from Southern Methodist University (SMU).
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              About five years ago, Duda began two journeys that shaped her career: <strong className="text-yellow-400">sales and social media</strong>. On one side, she built and managed a sales team of 20+ women, training and leading them to success. That experience taught her discipline, leadership, and how to truly connect with people to drive results.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              At the same time, she was growing as a content creator on TikTok, building a community of <strong className="text-yellow-400">400K followers and over 11 million likes</strong>. Reaching so many people showed her how powerful authentic content can be when it's done right.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              She realized that businesses needed that same type of content — not something that feels like just another ad, but <strong className="text-yellow-400">content people can relate to and connect with</strong>. This inspired her to launch Dudat Sales & Marketing, bringing her skills in sales and social media together.
            </p>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              Today, Dudat Sales & Marketing helps businesses grow through social media management and content creation, along with services like website design, SEO, Google Ads, Meta Ads, and text/message AI programs — always with the goal of creating content that feels <strong className="text-yellow-400">real, relatable, and impactful</strong>.
            </p>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-yellow-300/10 rounded-2xl p-8 border border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-2">
                2020
              </div>
              <div className="text-sm text-gray-400">Founded</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-2">
                60M+
              </div>
              <div className="text-sm text-gray-400">Total Views</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-2">
                11M+
              </div>
              <div className="text-sm text-gray-400">Total Likes</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-2">
                20+
              </div>
              <div className="text-sm text-gray-400">Sales Team Built</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
