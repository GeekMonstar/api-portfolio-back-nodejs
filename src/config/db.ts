import { connect } from "mongoose";

export default function db_connexion() {
  try {
    connect(process.env.URI!);
  } catch (err) {
    console.log("Connexion impossible");
  }
}
