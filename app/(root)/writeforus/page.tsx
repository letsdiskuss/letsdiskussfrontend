"use client";

import React from "react";

type CardItem = {
  title: string;
  description: string;
};

const cards: CardItem[] = [
  {
    title: "Establish an expert",
    description:
      "You may establish yourself as an expert in your subject by posting guest articles on reputable websites. Readers are more inclined to consider you an authority in your field when they see your name and material mentioned on reliable websites.",
  },
  {
    title: "Increase Your Visibility",
    description:
      "By guest posting, you may connect with new audiences and prospective clients who would not have otherwise heard of your company. You may drive targeted traffic back to your website by placing advertisements on websites that are relevant to your audience and have a strong readership.",
  },
  {
    title: "Boost SEO",
    description:
      "Getting high-quality backlinks to your website through guest posting is a successful strategy. Establishing credibility and trustworthiness for your website through backlinks from reputable sites may boost search engine rankings and increase natural visitors.",
  },
  {
    title: "Boost Brand recognition",
    description:
      "You may leave a long-lasting mark on your target audience and raise brand recognition by consistently submitting high-quality material to reliable websites. Increased consumer loyalty and brand awareness may result from this in the long run.",
  },
];

export default function Page() {
  return (
    <div className="">
      {/* 1st Section */}
      <div className="bg-white flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-20">
          {/* Left Text */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl text-black mb-4">
              Welcome to the Guest Posting Services at Let's Diskuss!
            </h1>
            <p className="text-gray-700 mb-6">
              Do you want to become more visible online, become an authority in
              your field, and increase website traffic? There's nowhere else to
              look! Let's Diskuss provides excellent guest post services that
              are intended to improve your brand and increase your internet
              presence.
            </p>
            <button className="bg-teal-900 hover:bg-teal-800 text-white px-6 py-2 rounded shadow-md w-fit">
              Get Started Today
            </button>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-6 w-full">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full border border-gray-300 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="w-full border border-gray-300 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                placeholder="Mobile No. *"
                className="w-full border border-gray-300 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                placeholder="Subject *"
                className="w-full border border-gray-300 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-teal-500"
              />
              <textarea
                rows={4}
                placeholder="Your Message *"
                className="w-full border border-gray-300 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="w-full bg-teal-900 hover:bg-teal-800 text-white py-2 rounded shadow-md"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 2nd Section (Guest Post Cards) */}
      <div className="bg-gray-100 py-16 flex flex-col items-center px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-4">
          What Makes a Guest Post?
        </h2>
        <p className="text-center max-w-2xl text-gray-600 mb-12">
          One effective digital marketing tactic is guest blogging, which is
          creating and uploading content on other websites related to your topic
          or sector. By adding worthwhile material to respectable websites, you
          can:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-md p-6 text-gray-700 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3rd  Section------------------------------------------------------------- */}
      <div className="bg-white py-16 px-4 flex flex-col items-center">
        {/* Heading + Intro Paragraph */}
        <div className="max-w-4xl text-center mb-12">
          <h2 className="text-3xl  text-gray-900 mb-4">
            Why Opt for Let's Diskuss?
          </h2>
          <p className="text-gray-700">
            Here at Let's Diskuss, we recognize the value of thoughtful guest
            writing in the current online environment. Our guest posting
            services are intended to make you stand out from the competition and
            accomplish your marketing objectives. Here's why you should choose
            us:
          </p>
        </div>

        {/* Text + Image Grid */}
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
          {/* Text List Section */}
          <div className="space-y-6 text-black text-sm">
            <p>
              <span className="font-semibold">High-quality:</span> This content
              is essential when it comes to guest posting, in our opinion. Our
              skilled writing staff will produce thoroughly researched,
              interesting, and educational pieces that fit the tone and style of
              the intended publication and appeal to your target readership.
            </p>
            <p>
              <span className="font-semibold">Relevant websites:</span> We have
              forged connections with a wide range of respectable websites in
              different markets and specializations. For your guest articles,
              we'll choose the most authoritative and relevant websites,
              regardless of the audience or niche you're trying to reach.
            </p>
            <p>
              <span className="font-semibold">White-Hat Practices:</span> We
              follow stringent white-hat procedures to guarantee that your guest
              articles are morally sound, environmentally friendly, and search
              engine compatible. Our strategy is centered on establishing
              sincere connections with website owners and adding value for their
              viewers.
            </p>
            <p>
              <span className="font-semibold">Transparent Process:</span> We
              think that communication and transparency should be practiced at
              every stage. Throughout the guest posting process, we keep you
              updated and involved with everything from subject brainstorming
              and content development to publishing and performance monitoring.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center">
            <img
              src="/writeforusimage.svg"
              alt="Why Opt for Let's Diskuss Illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>

      {/* 4th  Section------------------------------------------------------------- */}

      <div className="bg-gray-100 py-16 px-4">
        <h2 className="text-3xl  text-center text-gray-900 mb-12">
          Our Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Basic Package */}
          <div className="bg-white rounded-md shadow-md p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                Basic Package Guest Post
              </h3>
              <ul className="text-left text-sm text-gray-700 space-y-2">
                {[
                  "Invaluable Aspects of Our Guest Posting Packages",
                  "DA 62",
                  "DR 49",
                  "800+ Content-Length (in Words)",
                  <strong key="bp1">1 do follow Link in Each Post</strong>,
                  "Search Engines Friendly Content",
                  "Social Sharing",
                  "Increase Brand Awareness",
                  "Increase Website Authority",
                  "Quality Traffic",
                  "Spamming Score below 2 %",
                  "8 maximum posts",
                  "Turnaround Time – 1 Working Day",
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-600">✔️</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 text-center">
              <button className="bg-teal-900 text-white px-6 py-2 rounded hover:bg-teal-800 transition">
                Buy At $350/Month
              </button>
            </div>
          </div>

          {/* Premium Package */}
          <div className="bg-white rounded-md shadow-md p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                Premium Package Guest Post
              </h3>
              <ul className="text-left text-sm text-gray-700 space-y-2">
                {[
                  "Priceless Features of Our Packages for Guest Posting",
                  "DA 62",
                  "DR 49",
                  "800+ Content-Length (in Words)",
                  <strong key="pp1">2 Links in Each Post</strong>,
                  "Search Engines Friendly Content",
                  "Social Sharing",
                  "Increase Brand Awareness",
                  "Increase Website Authority",
                  "Quality Traffic",
                  "Spamming Score below 2 %",
                  "8 maximum posts",
                  "Turnaround Time – 1 Working Day",
                  "Total: - 10 blog post and 15 link inserts in existing articles",
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-600">✔️</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 text-center">
              <button className="bg-teal-900 text-white px-6 py-2 rounded hover:bg-teal-800 transition">
                Buy At $500/Month
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 5th  Section------------------------------------------------------------- */}
      <div className="bg-white py-16 px-4">
        <h2 className="text-3xl  text-center text-gray-900 mb-10">
          Our Methods
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/image5.svg"
              alt="Our Methods"
              className="w-[40%] h-[50%] max-w-md"
            />
          </div>

          {/* Right Text */}
          <div className="text-black text-sm space-y-6">
            <p>
              <span className="font-semibold">Consultation:</span> To create a
              guest blogging plan that is specific to your needs, we must get to
              know your objectives, target market, and specialty.
            </p>
            <p>
              <span className="font-semibold ">Research & Outreach:</span> To
              find pertinent websites and guest blogging possibilities, our
              staff performs in-depth research. After that, we get in touch with
              website owners to present them with concepts for excellent content
              that appeal to their readership.
            </p>
            <p>
              <span className="font-semibold">Material Creation:</span> After
              securing a guest blogging opportunity, our team of knowledgeable
              writers will produce interesting and educational material that
              highlights your experience and benefits readers.
            </p>
            <p>
              <span className="font-semibold">Publication & Marketing:</span> We
              collaborate closely with website designers to guarantee the prompt
              publication of your guest pieces. We increase the reach and impact
              of your material by promoting it via email newsletters, social
              media, and other channels after it is published.
            </p>
            <p>
              <span className="font-semibold">Performance Monitoring:</span> We
              offer frequent reports and analytics to monitor traffic,
              interaction, and backlink metrics related to your guest articles.
              This enables us to assess the effectiveness of our guest posting
              initiatives and make any necessary data-driven improvements.
            </p>
          </div>
        </div>
      </div>

      {/* 6th  Section------------------------------------------------------------- */}
      <div className="bg-teal-900 py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Start Now!</h2>
        <p className="max-w-7xl mx-auto mb-6 text-sm md:text-base">
          Are you prepared to leverage smart guest posting to further elevate
          your online presence? Get in touch with us right now to find out more
          about our guest posting options and how we can support your marketing
          objectives. Let's Diskuss is your go-to resource for excellent guest
          posting that produces outcomes.
        </p>
        <button className="bg-teal-700 hover:bg-teal-600 text-white py-2 px-6 rounded shadow">
          Get Started Today
        </button>
      </div>
    </div>
  );
}
