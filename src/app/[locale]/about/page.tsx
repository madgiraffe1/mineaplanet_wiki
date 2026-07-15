import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Mine a Planet Wiki',
  description: 'Mine a Planet Wiki is an unofficial fan guide hub for Mine a Planet.',
}

export default function Page() {
  return (
    <main className="min-h-screen px-4 pt-28 pb-16">
      <div className="container mx-auto max-w-3xl">
        <h1 className="mb-5 text-3xl font-bold md:text-4xl">About Mine a Planet Wiki</h1>
        <div className="space-y-5 text-muted-foreground leading-7">
          <p>Mine a Planet Wiki is an unofficial fan guide hub built to organize practical, source-aware information for Mine a Planet.</p>
          <p>The site focuses on safe Roblox progression, verified code status, beginner priorities, update notes, and guide planning without scripts or exploit advice.</p>
          <p>This site is not affiliated with Skydog Games or Roblox Corporation.</p>
        </div>
      </div>
    </main>
  )
}
