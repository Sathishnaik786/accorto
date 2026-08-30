export interface OfficeLocation {
  id: string;
  name: string;
  region: string;
  addressLines: string[];
  fullAddress: string;
  mapEmbedUrl: string;
  directionsUrl: string;
  ariaLabel: string;
}

export const LOCATIONS: OfficeLocation[] = [
  {
    id: "india",
    name: "Hyderabad, India",
    region: "India",
    addressLines: [
      "Kondapur, Forest Dept Colony, Gachibowli,",
      "Hyderabad, Telangana 500084, India",
    ],
    fullAddress: "Kondapur, Forest Dept Colony, Gachibowli, Hyderabad, Telangana 500084, India",
    mapEmbedUrl: "https://maps.google.com/maps?q=Kondapur,%20Forest%20Dept%20Colony,%20Gachibowli,%20Hyderabad,%20Telangana%20500084,%20India&z=15&output=embed",
    directionsUrl: "https://maps.google.com/?q=Kondapur,+Forest+Dept+Colony,+Gachibowli,+Hyderabad,+Telangana+500084,+India",
    ariaLabel: "Get directions to Accorto Hyderabad office",
  },
  {
    id: "us",
    name: "US Branch",
    region: "United States",
    addressLines: [
      "5602 Owens Drive, Suite 101,",
      "Pleasanton, CA 94588, USA",
    ],
    fullAddress: "5602 Owens Drive, Suite 101, Pleasanton, CA 94588, USA",
    mapEmbedUrl: "https://maps.google.com/maps?q=5602%20Owens%20Drive,%20Suite%20101,%20Pleasanton,%20CA%2094588,%20USA&z=15&output=embed",
    directionsUrl: "https://maps.google.com/?q=5602+Owens+Drive,+Suite+101,+Pleasanton,+CA+94588,+USA",
    ariaLabel: "Get directions to Accorto US office",
  },
];
