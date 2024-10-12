const propiedades_venta = [
	{
		nombre: "Apartamento de lujo en zona exclusiva",
		src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
		descripcion:
			"Este apartartamento de lujo está ubicado en una exclusiva zona residencial.",
		ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
		habitaciones: 4,
		baños: 4,
		costo: 5000,
		smoke: false,
		pets: false,
	},
	{
		nombre: "Apartamento acogedor en la montaña",
		src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
		descripcion:
			"este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.",
		ubicacion: "789 Mountain Road, Summiy Peaks, CA 234556",
		habitaciones: 2,
		baños: 1,
		costo: 1200,
		smoke: true,
		pets: true,
	},
	{
		nombre: "Penthouse de lujo con terraza panorámica",
		src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
		descripcion:
			"Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.",
		ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
		habitaciones: 3,
		baños: 3,
		costo: 4500,
		smoke: false,
		pets: true,
	},
	{
		nombre: "Casa acogedora a las afueras de la ciudad",
		src: "https://http2.mlstatic.com/D_NQ_NP_839640-MLC53605509708_022023-O.webp",
		descripcion:
			"Esta casa de 3 habitaciones está ubicada en una exclusiva zona resindencial a las afueras de la ciudad.",
		ubicacion: "234 Calle Falsa, Ciudad Gótica, CA 12345",
		habitaciones: 3,
		baños: 2,
		costo: 3500,
		smoke: true,
		pets: true,
	},
];

const propiedades_alquiler = [
	{
		nombre: "Apartamento en el centro de la ciudad",
		src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
		descripcion:
			"Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
		ubicacion: "123 Main Street, Anytown, CA 91234",
		habitaciones: 2,
		costo: 2000,
		smoke: false,
		pets: true,
	},
	{
		nombre: "Apartamento luminoso con vista al mar",
		src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
		descripcion:
			"Este hermoso apartamento ofrece una vista impresionante al mar",
		ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
		habitaciones: 3,
		baños: 2,
		costo: 2500,
		smoke: true,
		pets: true,
	},
	{
		nombre: "Condominio moderno en zona residencial",
		src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
		descripcion:
			"Este elegante condominio moderno está ubicado en una tranquila zona residencial",
		ubicacion: "123 Main Street, Anytown, CA 91234",
		habitaciones: 2,
		baños: 3,
		costo: 2200,
		smoke: false,
		pets: false,
	},
	{
		nombre: "Cabaña en medio del bosque",
		src: "https://http2.mlstatic.com/D_NQ_NP_691466-MLC76131891845_052024-O.webp",
		descripcion:
			"Esta acogedora cabaña en el bosque es el lugar perfecto para descansar.",
		ubicacion: "123 Calle del Bosque, Boscoso, CA 12345",
		habitaciones: 2,
		baños: 2,
		costo: 5200,
		smoke: false,
		pets: true,
	},
];

const sectionVenta = document.querySelector("#venta");
const sectionAlquiler = document.querySelector("#alquiler");
const sectionVentaIndex = document.querySelector("#ventaIndex");
const sectionAlquilerIndex = document.querySelector("#alquilerIndex");

function dibujarElementos(listaElementos, indexed) {
	for (let elemento = 0; elemento < listaElementos.length; elemento++) {
		const smokeIcon = listaElementos[elemento].smoke
			? '<i class="fas fa-smoking"></i> Se permite fumar'
			: '<i class="fas fa-smoking-ban"></i> No se permite fumar';
		const petsIcon = listaElementos[elemento].pets
			? '<i class="fas fa-paw"></i> Se permiten mascotas'
			: '<i class="fas fa-ban"></i> No se permiten mascotas';

		const template = `
    <div class="col-4">
        <div class="card">
            <img src="${listaElementos[elemento].src}" alt="${
			listaElementos[elemento].nombre
		}" class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">${listaElementos[elemento].nombre}</h5>
                <p class="card-text">${listaElementos[elemento].descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${
									listaElementos[elemento].ubicacion
								}</p>
                <p>
                    <i class="fas fa-bed"></i> ${
											listaElementos[elemento].habitaciones
										} Habitaciones |
                    <i class="fas fa-bath"></i> ${
											listaElementos[elemento].baños
										} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${
									listaElementos[elemento].costo
								}</p>
                <p class="text-${
									listaElementos[elemento].smoke ? "success" : "danger"
								}">${smokeIcon}</p>
                <p class="text-${
									listaElementos[elemento].pets ? "success" : "danger"
								}">${petsIcon}</p>
            </div>
        </div>
    </div>
    `;

		if (listaElementos == propiedades_alquiler) {
			indexed
				? (sectionAlquilerIndex.innerHTML += template)
				: (sectionAlquiler.innerHTML += template);
		}

		if (listaElementos == propiedades_venta) {
			indexed
				? (sectionVentaIndex.innerHTML += template)
				: (sectionVenta.innerHTML += template);
		}

		if (indexed) {
			if (elemento == 2) {
				break;
			}
		}
	}
}

if (sectionAlquiler) {
	dibujarElementos(propiedades_alquiler, false);
}

if (sectionVenta) {
	dibujarElementos(propiedades_venta, false);
}

if (sectionAlquilerIndex) {
	dibujarElementos(propiedades_alquiler, true);
}

if (sectionVentaIndex) {
	dibujarElementos(propiedades_venta, true);
}