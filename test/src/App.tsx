import React, {useState, useEffect, useRef} from 'react';
import './styles/styles.sass';
import Statistics from './components/Statisctics';
import Session from './components/Session';
import {Search, Home, Menu, Calendar, MessageSquare, Settings} from 'react-feather';



function App() {

	const [active, setActive] = useState(true);

	const [search, setSearch] = useState("");

	const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
		setSearch(event.target.value);
	}

	// const asd = document.getElementById('search')?.style

	return (
		<div className="time-app">
			<div className="time-app-header">
				<div className="time-app-title">
					<h2>Сессии за сегодня - 08.10.2021</h2>
				</div>
				<div className="time-app-everywhere">
					<span>Везде</span>
				</div>
			</div>
			<div className="main-block">
				<div className="content">
					<div className="content-header">
						<div className="active-completed">
							<div className={active ? "active" : "inactive"} onClick={() => setActive(true)}>
								<span>Активные</span>
							</div>
							<div className={!active ? "completed" : "incomplete"} onClick={() => setActive(false)}>
								<span>Завершенные</span>
							</div>
						</div>
						<div className="search">
							<label id="search">
								<Search/>
								<input 
									type="text" 
									placeholder="Поиск"
									value={search}
									onChange={handleChange}
								/>
							</label>
						</div>
					</div>
					<div className="session-data">
						<Session showActive={active} search={search}/>
					</div>
				</div>
				<div className="statistics">
					<Statistics/>
				</div>
			</div>
			<div className="menu-navbar">
				<div><Home color="#007AFF"/></div>
				<div><Menu color="#007AFF"/></div>
				<div><Calendar color="#007AFF"/></div>
				<div><MessageSquare color="#007AFF"/></div>
				<div><Settings color="#007AFF"/></div>
			</div>
		</div>
	);
}

export default App;
