import Image from 'next/image'

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Image
          src="/awal-radzi-logo.webp"
          alt=""
          width={220}
          height={185}
          className="footer-mark"
        />
        <p className="eyebrow">AWAL RADZI</p>
        <p>Contemporary abstract paintings.</p>
      </div>
    </footer>
  )
}
