export function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-2xl">
      <iframe
        title="מיקום מזון ייעוץ מס על המפה"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.960401255349!2d34.99763237600422!3d32.81981417364574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dbb7e6daac839%3A0x63ef9a81bcd0eccb!2z157XlteV158g16nXnteV15DXnCDXldeZ15XXodeZINeZ15XXodem15kg157XoQ!5e0!3m2!1sen!2sus!4v1771928149177!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
