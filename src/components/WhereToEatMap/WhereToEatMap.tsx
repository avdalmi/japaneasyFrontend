import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function WhereToEatMap() {
  return (
    <div>
      <MapContainer
        center={[52.3676, 4.9041]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "1000px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[52.34158, 4.85302]}>
          <Popup>
            <strong>Ken Sushi </strong>
            <br /> An amazing omakase sushi restaurant with 12 seats. The chef
            prepares and serves each sushi individually and serves them.
            <br />
            <a href="https://kensushiamsterdam.business.site/" target="_blank">
              Ken Sushi website
            </a>
          </Popup>
        </Marker>
        <Marker position={[52.37047, 4.88215]}>
          <Popup>
            <strong>Fou Fow Ramen</strong>
            <br />
            My favorite ramen restaurant in Amsterdam. Good quality, no nonsense
            and affordable.
            <br />
            <a href="https://www.foufow.nl/">Fou Fow Ramen website</a>
          </Popup>
        </Marker>
        <Marker position={[52.3716, 4.8834]}>
          <Popup>
            <strong>Fou Fow Udon</strong>
            <br />
            One of the only udon restaurants in town. A little bit on the
            expensive side considering what it is but still very good. I would
            not recommend going during rush hour.
            <br />
            <a href="https://www.facebook.com/profile.php?id=100040336066197">
              Fou Fow Udon website
            </a>
          </Popup>
        </Marker>
        <Marker position={[52.37802, 4.88895]}>
          <Popup>
            <strong>Nobu</strong>
            <br />
            Recently opened Nobu mainly serves Mochi donuts and Asian inspired
            sandwiches. The black sesame latter and Matcha latte is one of the
            cities best.
            <br />
            <a href="https://nobu-amsterdam.com/">Nobu website</a>
          </Popup>
        </Marker>
        <Marker position={[52.34506, 4.88903]}>
          <Popup>
            <strong>Hakata Senpachi</strong>
            <br />
            A Japanese Grill restaurant that serves mainly skewers. You will
            find a lot of Japanese business men here because it is one of the
            more Authentic Japanese restaurants in Amsterdam.
            <br />
            <a href="https://hakatasenpachi.com/">Hakata Senpachi website</a>
          </Popup>
        </Marker>
        <Marker position={[52.37287, 4.90178]}>
          <Popup>
            <strong>Restaurant Kyo</strong>
            <br />
            Restaurant Kyo is owned by the Dun Yong supermarket group. It is a
            little pricy for what it is but the queality is good and they have a
            wide selection of menu items.
            <br />
            <a href="https://restaurantkyo.nl/assets/ti/koningsstraat/menus">
              Restaurant Kyo website
            </a>
          </Popup>
        </Marker>
        <Marker position={[52.37736, 4.90152]}>
          <Popup>
            <strong>Ramen Kingdom</strong>
            <br />
            A small ramen restaurant next to central station. It is a little
            pricy and the portions are a bit small but the quality is very very
            good. The interior is nicely decorated as well.
            <br />
            <a href="https://www.ramenkingdom.nl/">Ramen kingdom website</a>
          </Popup>
        </Marker>
        <Marker position={[52.34897, 4.89427]}>
          <Popup>
            <strong>Yamazato</strong>
            <br />
            A familiar name in Amsterdam as they have a michelin star. While
            dinners can be very pricy, lunches are relatively affordable for
            special occasions.
            <br />
            <a href="https://www.yamazato.nl/">Yamazato website</a>
          </Popup>
        </Marker>
        <Marker position={[52.35507, 4.88684]}>
          <Popup>
            <strong>IZAKAYA</strong>
            <br />
            A more modern asian fusion restuarant in Amsterdam. While items are
            definitely overpriced the quality is good and the desserts are
            amazing.
            <br />
            <a href="https://www.izakaya-restaurant.com/amsterdam/about">
              IZAKAYA website
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default WhereToEatMap;
