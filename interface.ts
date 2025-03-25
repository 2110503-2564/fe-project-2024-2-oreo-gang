interface VenueItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    dailyrate: number,
    __v: number,
    id: string
  }
  
  interface VenueJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: VenueItem[]
  }

  interface BookingItem {
    nameLastname: string;
    tel: string;
    venue: string;
    bookDate: string;
  }

  interface BookingJson {

  }

  interface CarItem {
    model: string,
    brand: string,
    pricePerDay: string,
    imageURL: string
  }

  interface ProviderItem {
    _id : string,
    name: string,
    address: string,
    phone: string,
    car: CarItem,
    __v: string,
    
  }

  interface ProviderJson {
    success : boolean,
    count : number,
    data : ProviderItem[]
  }

  interface User {
    name : string,
    email: string,
    role: string,
    password: string,
    phone: string
  }