import type { Metadata } from 'next'
import { PageIntro } from '../components/PageIntro'

export const metadata: Metadata = {
  title: 'Exhibitions',
  description:
    'Exhibitions, presentations and public archive by Awal Radzi.',
}

const exhibitions = [
  {
    title: 'Public archive opening',
    date: '2026',
    text: 'First public presentation of recent paintings, with work pages and a structure prepared for future exhibitions.',
  },
  {
    title: 'Studio documentation',
    date: 'Proximamente',
    text: 'Espacio reservado para fotografias de estudio, montaje, detalles de superficie y registros de proceso.',
  },
  {
    title: 'Exhibition history',
    date: 'En desarrollo',
    text: 'Modulo editorial preparado para incorporar exposiciones, ferias, textos curatoriales y enlaces de prensa cuando esten disponibles.',
  },
]

export default function ExhibitionsPage() {
  return (
    <main>
      <PageIntro eyebrow="Exhibitions" title="Public archive">
        <p>
          A spare exhibition archive for presentations, studio documentation and future
          public projects.
        </p>
      </PageIntro>

      <section className="exhibition-list">
        {exhibitions.map((item) => (
          <article className="exhibition-item" key={item.title}>
            <div>
              <p className="eyebrow">{item.date}</p>
              <h2>{item.title}</h2>
            </div>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
