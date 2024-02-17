
import React from "react";
//import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import Clock from "../clock"; // Adjust the file path and casing accordingly
// 正确的导入方式
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
        <div style={{ fontSize: '100px' }}>
          <Clock />
        </div>
      </div>
      <div className="medication-section">
        <p><b>【心臟病處方】用藥提醒</b></p>
        <div className="medication-list">
        </div>
      </div>
    </Card>
  );
}
export default Home;
