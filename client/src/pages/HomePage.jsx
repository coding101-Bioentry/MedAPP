
import React from "react";
//import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import Clock from "../clock"; // Adjust the file path and casing accordingly

// 假設你已經導入了圖標組件，或者你可以使用SVG/圖片
//import { MenuIcon, SunIcon } from "../components/icons";

function Home() {
  return (
    <Card className="Home">
      <CardHeader>
        <CardTitle>即時用藥管理</CardTitle>
      </CardHeader>
      <br />
      <div className="Clock">
        <p><b>現在時間</b></p>
        <br/>
        <div style={{ fontSize: '150px' }}>
          <Clock />
        </div>
      </div>
      <div className="medication-section">
        <p><b>用藥提醒</b></p>
        <br />
        <div className="medication-list">
        </div>
      </div>
    </Card>
  );
}
export default Home;
