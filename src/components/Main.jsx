import React from "react";
import { useState } from "react";

export default function Main() {
	return (
		<div>
			<button onClick={subtract}>-</button>
			<div>{count}</div>
			<button onClick={add}>+</button>
		</div>
	);
}
