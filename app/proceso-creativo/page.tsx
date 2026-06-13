import type { Metadata } from 'next'
import { PageIntro } from '../components/PageIntro'

export const metadata: Metadata = {
  title: 'Process',
  description:
    'Studio process and visual language of Awal Radzi.',
}

const steps = [
  {
    title: 'Linea',
    text: 'La linea aparece como una primera decision fisica. No describe una escena: abre recorridos, tensiones y direcciones dentro del campo pictorico.',
  },
  {
    title: 'Campo',
    text: 'El color establece temperatura y profundidad. Sobre el campo aparecen capas que organizan la mirada sin cerrar la lectura de la obra.',
  },
  {
    title: 'Interrupcion',
    text: 'Las formas oscuras, los vacios y los cruces introducen pausas. La composicion se construye desde equilibrio, friccion y respiracion.',
  },
  {
    title: 'Archivo',
    text: 'Cada obra se documenta como parte de una serie abierta. La web esta preparada para incorporar detalles de proceso, estudio y montaje.',
  },
]

export default function ProcessPage() {
  return (
    <main>
      <PageIntro eyebrow="Process" title="Gesture, pause, system">
        <p>
          A concise view into the studio language behind the paintings.
        </p>
      </PageIntro>

      <section className="process-list">
        {steps.map((step) => (
          <article className="process-item" key={step.title}>
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
