import React from "react";

export default function Overview({ goals }) {
  const totalSaved = goals.reduce((acc, g) => acc + Number(g.savedAmount), 0);
  const completed = goals.filter((g) => g.savedAmount >= g.targetAmount).length;

  return (
    <div>
      <h2>Overview</h2>
      <p>Total Goals: {goals.length}</p>
      <p>Total Saved: ${totalSaved}</p>
      <p>Goals Completed: {completed}</p>
    </div>
  );
}
