import KeretaData from "../../public/data/KeretaApi.json";
import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

interface Kereta {
  IdLoko: number;
  Nama: string;
  Rute: string;
  Lokomotif: string;
  Daya: string;
  Tiket: number;
  Tipe: string;
  KecepatanMaks: string;
  BahanBakar: string;
  Pemilik: string;
}

const KeretaList = () => {
  const Keretas: Kereta[] = KeretaData["Kereta Api"];
  
  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">POSTINGAN PAGE</h1>
      {Keretas.map((Kereta) => (
        <CardList key={Kereta.IdLoko}>
          <p>{Kereta.Nama}</p>
          <i>Rute : {Kereta.Rute}</i>
          <p>Lokomotif : {Kereta.Lokomotif}</p>
          <p>Daya : {Kereta.Daya} </p>
          <p>Harga Tiket : {Kereta.Tiket}</p>
          <p>Tipe : {Kereta.Tipe} </p>
          <p>Kecepatan Maksimal : {Kereta.KecepatanMaks}</p>
          <p>Bahan Bakar : {Kereta.BahanBakar}</p>
          <p>Pemilik : {Kereta.Pemilik}</p>
          <ViewUserButton userId={Kereta} />
        </CardList>
      ))}
    </>
  );
};

export default KeretaList;