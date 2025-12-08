export default async function PromocionesItem(props) {
    const { title, subtitle, imagen, body } = props;
    return (
        <div className="promociones">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={imagen} alt={title} />
           <div dangerouslySetInnerHTML={{ __html: body }} />
           <hr />
        </div>
    );
}