import { Badge } from "@/components/ui/badge"

const TargetUsersSection = () => {
  const userGroups = [
    { label: "Developers", variant: "default" as const },
    { label: "Gamers", variant: "secondary" as const },
    { label: "Designers", variant: "outline" as const },
    { label: "Web3 Enthusiasts", variant: "default" as const },
    { label: "NFT Communities", variant: "secondary" as const },
    { label: "Influencers", variant: "outline" as const },
    { label: "Students", variant: "default" as const },
    { label: "Traders", variant: "secondary" as const },
    { label: "Ambassadors", variant: "outline" as const },
  ]

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            The Specific Group of Users We Aim to{" "}
            <span className="text-blue-600">Reach</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            From beginners to blockchain enthusiasts, we onboard everyone into
            Web3.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {userGroups.map((group, index) => (
            <Badge
              key={index}
              variant={group.variant}
              className="cursor-pointer px-6 py-3 text-base transition-all hover:scale-105"
            >
              {group.label}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TargetUsersSection