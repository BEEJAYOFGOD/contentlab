import { Network } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <Network className="h-8 w-8" />
              <span className="text-2xl font-bold">ContentLab</span>
            </div>
            <p className="text-sm text-gray-400">
              Bridging the gap between content, culture, and crypto. Empowering
              creators and blockchain projects to drive Web3 adoption.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#how-it-works" className="hover:text-white">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#for-creators" className="hover:text-white">
                  For Creators
                </a>
              </li>
              <li>
                <a href="#for-projects" className="hover:text-white">
                  For Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Medium
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 ContentLab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer