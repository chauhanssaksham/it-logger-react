import React, {useState, useEffect, Fragment} from 'react'
import TechItem from './TechItem';
import {Preloader} from 'react-materialize'

const TechListModal = () => {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        getTechs();
        //eslint-disable-next-line
    }, []);

    const getTechs = async () => {
        setLoading(true);
        const res = await fetch('http://localhost:5000/techs');
        const data = await res.json();
        setTechs(data);
        setLoading(false);
    }
    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                {loading? (
                    <div className="center-align">
                    <Preloader active color="blue" flashing={false} size="big" />
                    </div>
                ): (
                    <Fragment>
                    <h4>Technician List</h4>
                    <ul className="collection">
                        {
                        !loading && techs.length === 0?
                            (
                                <p className="center">No techs yet, please start by adding one...</p>
                            ):(
                                techs.map(tech=>(
                                    <TechItem tech={tech} key={tech.id}></TechItem>
                                ))
                            )
                        }
                    </ul>
                    </Fragment>
                )}
            </div>
        </div>
    )
}

export default TechListModal

