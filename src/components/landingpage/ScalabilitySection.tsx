import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ScalabilitySection = () => {
  const features = [
    {
      title: "Replicable Model",
      description:
        "Our framework is designed to scale across regions, languages, and communities. What works in one market can be adapted globally.",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      title: "Decentralized Creator Network",
      description:
        "By utilizing a global network of creators, we can produce content at scale without sacrificing quality or cultural relevance.",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      title: "Partnership-Driven Expansion",
      description:
        "We partner with leading blockchain projects, influencers, and platforms to amplify reach and accelerate adoption.",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Tech & Automation Scalability",
      description:
        "Leveraging smart contracts, analytics, and automation tools, we streamline operations and maximize efficiency as we grow.",
      gradient: "from-orange-400 to-red-500",
    },
    {
      title: "Community Growth Loop",
      description:
        "As more users engage, more creators join, and more projects partner with us—creating a self-sustaining ecosystem.",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      title: "Community Support",
      description:
        "We provide ongoing support, resources, and incentives to keep our community engaged and growing organically.",
      gradient: "from-green-400 to-green-600",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20">
      {/* Decorative background element */}
      <div className="absolute bottom-0 right-0 h-[500px] w-[400px] opacity-30">
        <img
          src="https://images.pexels.com/photos/34349537/pexels-photo-34349537.jpeg"
          alt="Landiva  Weber on Pexels"
          className="h-full w-full object-cover"
          style={{ backgroundColor: "#DA6CFF" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Infinitely Scalable
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-white/90">
            Built for global expansion with a self-reinforcing growth model
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`border-none bg-gradient-to-br ${feature.gradient} text-white transition-transform hover:scale-105`}
            >
              <CardHeader>
                <CardTitle className="text-xl text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/90">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScalabilitySection