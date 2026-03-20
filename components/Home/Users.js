import React from "react";
import baseConfig from '../../res/baseConfig.json'

export default function Users() {
  return (
    <section className="aSection users">
      <div className="title">Over {baseConfig.users} {baseConfig.user_count_unit} People</div>
      <div className="title">Use LEGiON Products</div>
      <div className="info">Across every country in the world.</div>
    </section>
  );
}
