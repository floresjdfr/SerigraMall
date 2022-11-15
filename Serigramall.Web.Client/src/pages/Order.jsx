import { Table } from "react-bootstrap"

export default function Order({ cartItems }) {
    cartItems = [
        {
            "name": "State",
            "value": [
                {
                    "id": "63607a43463cde2070b83675",
                    "description": "Botella 500 ml",
                    "providerID": "google-oauth2|106559183086101149548",
                    "productName": "Botella Metalica",
                    "basePrice": "7500",
                    "baseTax": "13",
                    "productType": "PRODUCT",
                    "image": "/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wAARCAXcBdwDAREAAhEBAxEB/8QAmwABAAIDAQEBAAAAAAAAAAAAAAQFAgMGBwEIAQEBAQEAAAAAAAAAAAAAAAAAAgEDEAEAAQMCAwUEBQcIBwUECgMAAhIDBCIyQlIFAWJyEwaCkqKywiMzFAfwEdJzJDQ2ITFx4vJDFTVBUbFTY3QlYYOToxaBkURkocGzw9NUlEUmF4S0VREBAQEBAAAAAAAAAAAAAAAAAAERAv/a...",
                    "registryDate": "2022-11-01T01:45:39.924Z",
                    "productState": 4,
                    "amount": 1,
                    "seri": {
                        "id": "6358d9fd024212a384e6b094",
                        "description": "Available size: 30x60cm",
                        "providerID": "auth0|635167135bdae0d184bf507c",
                        "productName": "Hourses",
                        "basePrice": "900",
                        "baseTax": "12",
                        "productType": "SERIGRAPHY",
                        "image": "/9j/4Rr3RXhpZgAATU0AKgAAAAgADAEAAAMAAAABCDUAAAEBAAMAAAABDwcAAAECAAMAAAADAAAAngEGAAMAAAABAAIAAAESAAMAAAABAAEAAAEVAAMAAAABAAMAAAEaAAUAAAABAAAApAEbAAUAAAABAAAArAEoAAMAAAABAAIAAAExAAIAAAAhAAAAtAEyAAIAAAAUAAAA1YdpAAQAAAABAAAA7AAAASQACAAIAAgACvyAAAAnEAAK/IAAACcQQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkAMjAyMDowOTowMyAxNDozNTowOQAAAAAABJAAAAcAAAAEMDIyMaABAAMAAAABAAEAAKACAAQAAAABAAABiaADAAQAAAABAAAC0AAAAAAAAAAGAQMAAwAAAAEABgAAARoABQAAAAEAAAFyARsABQAAAAEAAAF6ASgAAwAAAAEAAgAAAgEABAAAAAEAAAGCAgIABAAAAAEA...",
                        "registryDate": null,
                        "productState": 4
                    }
                }
            ],
            "subHooks": [],
            "hookSource": {
                "lineNumber": 23,
                "functionName": "CartProvider",
                "fileName": "http://127.0.0.1:5000/src/components/carrito/CartContext.jsx",
                "columnNumber": 37
            }
        },
        {
            "name": "Effect",
            "value": "ƒ () {}",
            "subHooks": [],
            "hookSource": {
                "lineNumber": 31,
                "functionName": "CartProvider",
                "fileName": "http://127.0.0.1:5000/src/components/carrito/CartContext.jsx",
                "columnNumber": 3
            }
        }
    ]

    return 
    <>
        <Table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
        </Table>
    </>
}