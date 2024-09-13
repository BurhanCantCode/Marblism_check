import { HTMLAttributes } from 'react'

type LogoType = {
  url: string
}

interface Props extends HTMLAttributes<HTMLElement> {
  title: string
  logos: LogoType[]
}

export const LandingSocialProof: React.FC<Props> = ({ logos }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center  text-slate-600 dark:text-slate-400">
          Featured on
        </h2>
        <div className="flex gap-8 md:gap-20 items-center justify-center mt-8 flex-wrap">
          {logos.map((logo, idx) => (
            <img className="h-6 md:h-10" key={`logo-${idx}`} src={logo.url} />
          ))}
        </div>
      </div>
    </section>
  )
}
