import imgCityLite from '../../assets/scooters/scooter-city-lite.png'
import imgConceptOne from '../../assets/scooters/scooter-concept-one.png'
import imgSportGt from '../../assets/scooters/scooter-sport-gt.png'
import imgUrbanPro from '../../assets/scooters/scooter-urban-pro.png'

export interface ProductModel {
  id: string
  name: string
  edition: string
  category: 'urban' | 'performance' | 'long-range'
  price: string
  speed: string
  range: string
  charging: string
  motor: string
  weight: string
  badge: string
  accent: string
  image: string
  frontSpec: string
  description: string
}

export const PRODUCTS_DATA: ProductModel[] = [
  {
    id: 'ev-b-concept',
    name: 'EV-B Concept One',
    edition: 'Edição Assinatura',
    category: 'urban',
    price: 'R$ 14.900',
    speed: '50 km/h',
    range: '80 km',
    charging: '3,5 h',
    motor: '2,5 kW Hub',
    weight: '62 kg',
    badge: 'Destaque',
    accent: '#35a7a0',
    image: imgConceptOne,
    frontSpec: 'Pneu Fat-Tire 130/90-10 + Freio a Disco Hidráulico ABS',
    description:
      'Chassi tubular rebaixado em preto obsidiana fosco com pneus largos fat-tire e estabilidade urbana incomparável.',
  },
  {
    id: 'ev-b-pro',
    name: 'EV-B Urban Pro',
    edition: 'Série Commuter',
    category: 'long-range',
    price: 'R$ 17.490',
    speed: '60 km/h',
    range: '110 km',
    charging: '3,0 h',
    motor: '3,2 kW Hub',
    weight: '65 kg',
    badge: 'Mais Vendida',
    accent: '#4eb5ad',
    image: imgUrbanPro,
    frontSpec: 'Farol Halo LED Integrado + Carenagem Verde Glacial Acetinada',
    description:
      'Carenagem em verde glacial acetinado, farol Halo LED na coluna de direção e bateria dupla para 110 km de autonomia.',
  },
  {
    id: 'ev-b-gt',
    name: 'EV-B Sport GT',
    edition: 'Linha Performance',
    category: 'performance',
    price: 'R$ 21.900',
    speed: '75 km/h',
    range: '95 km',
    charging: '2,5 h',
    motor: '4,8 kW Mid',
    weight: '68 kg',
    badge: 'Alto Torque',
    accent: '#73adc1',
    image: imgSportGt,
    frontSpec: 'Suspensão Invertida Bronze Anodizado + Pinças Radiais Ciano',
    description:
      'Quadro em alumínio prata anodizado, carenagem traseira em fibra de carbono, suspensão invertida e pinças esportivas ciano.',
  },
  {
    id: 'ev-b-lite',
    name: 'EV-B City Lite',
    edition: 'Série Compacta',
    category: 'urban',
    price: 'R$ 11.990',
    speed: '45 km/h',
    range: '65 km',
    charging: '2,8 h',
    motor: '1,8 kW Hub',
    weight: '54 kg',
    badge: 'Ultra Leve',
    accent: '#6dc7bd',
    image: imgCityLite,
    frontSpec: 'Garfo Invertido Verde-Esmeralda + Pinça Radial Ciano',
    description:
      'Quadro tubular ultraleve em titânio grafite com carenagem em verde-esmeralda metálico de alto brilho.',
  },
]
