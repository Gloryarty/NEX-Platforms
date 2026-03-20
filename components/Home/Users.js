import React from "react";
import baseConfig from '../../res/baseConfig.json'

export default function Users() {
  return (
    <section className="aSection users">
      <div className="title">
        {baseConfig.users} {baseConfig.user_count_unit} people know our games
      </div>
      <div className="info">All around the world.</div>
    </section>
  );
}
