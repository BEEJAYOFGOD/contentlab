import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, Coins, Gamepad2, ShoppingBag } from "lucide-react"

const ProjectsSection = () => {
  const projects = [
    {
      icon: Wallet,
      title: "DeFi & Staking",
      description:
        "Decentralized finance platforms, yield farming protocols, and staking solutions that democratize access to financial services.",
      color: "text-blue-500",
    },
    {
      icon: Coins,
      title: "Blockchain Networks",
      description:
        "Layer 1 and Layer 2 blockchain platforms building the infrastructure for the decentralized future.",
      color: "text-purple-500",
    },
    {
      icon: Gamepad2,
      title: "GameFi Projects",
      description:
        "Play-to-earn games, metaverse platforms, and gaming ecosystems merging entertainment with blockchain rewards.",
      color: "text-green-500",
    },
    {
      icon: ShoppingBag,
      title: "NFT Marketplaces",
      description:
        "Decentralized NFT platforms, digital collectibles, and creative ecosystems empowering artists and collectors.",
      color: "text-orange-500",
    },
  ]

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Web3 Projects We Work{" "}
            <span className="text-blue-600">With</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Helping blockchain projects grow their community, liquidity, and
            visibility through relatable content.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-2 transition-all hover:border-blue-500 hover:shadow-lg"
            >
              <CardHeader>
                <project.icon className={`mb-4 h-12 w-12 ${project.color}`} />
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection