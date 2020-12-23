import React from 'react';

export default function Navbar() {

    return (
        <div>


        <nav className="navbar navbar-default navbar-custom">
        <div className="container">
            
            <div className="navbar-header">
            <a className="navbar-brand" href="#">BRAND</a>
            </div>

            <div className="navs-container text-uppercase">
            
            <ul className="nav navbar-nav navbar-right visible-lg visible-md">
                <li><a href="#">F</a></li>
                <li><a href="#">T</a></li>
                <li><a href="#">I</a></li>
            </ul>
            <form className="navbar-form navbar-right" role="search">
                <div className="search-box" id="search-box">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search..."/>
                    <span className="input-group-btn">
                    <button type="submit" className="btn btn-default"><span className="glyphicon glyphicon-search"></span></button>
                    <button type="button" className="btn btn-default toggle-hide hidden-md hidden-lg" data-target="#search-box"><span className="glyphicon glyphicon-remove"></span></button>
                    </span>
                </div>          
                </div>
                <button type="button" data-target="#search-box" className="btn btn-default visible-xs visible-sm toggle-display"><span className="glyphicon glyphicon-search"></span></button>
            </form>
            
            <ul className="nav navbar-nav navbar-nav-primary">
                <li className="has-dropdown-custom">
                <a href="#" role="button">Dropdown <span className="glyphicon glyphicon-menu-down" aria-hidden="true"></span></a>
                <ul className="dropdown-custom lefter">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li><a href="#">Separated link</a></li>
                    <li><a href="#">One more separated link</a></li>
                </ul>
                </li>
                <li className="has-dropdown-custom visible-sm visible-xs">
                <a href="#" role="button">Dropdown <span className="glyphicon glyphicon-menu-down" aria-hidden="true"></span></a>
                <ul className="dropdown-custom righter">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li><a href="#">Separated link</a></li>
                    <li><a href="#">One more separated link</a></li>
                </ul>
                </li>
            </ul>
                        
            </div>
        </div>
        
        <div className="navs-secondary visible-lg visible-md">
            <div className="container">
            <ul className="nav navbar-nav text-uppercase">
                <li><a href="#">Link #1</a></li>
                <li><a href="#">Link #2</a></li>
                <li><a href="#">Link #3</a></li>
                <li><a href="#">Link #4</a></li>
                <li><a href="#">Link #5</a></li>
                <li><a href="#">Link #6</a></li>
                <li><a href="#">Link #7</a></li>
                <li><a href="#">Some long ones</a></li>
            </ul>
            </div>
        </div>
        
        
        </nav>



</div>
   
        //from bootstap official site
// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Link</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a className="dropdown-item" href="#">Action</a></li>
//             <li><a className="dropdown-item" href="#">Another action</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//       <form className="d-flex">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>



//last one from the bootstrap 
        //doesn't get full 
    //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="#">Navbar</a>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <a className="nav-link active" aria-current="page" href="#">Home</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#">Link</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    //           </li>
    //         </ul>
    //         <form className="d-flex">
    //           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //           <button className="btn btn-outline-success" type="submit">Search</button>
    //         </form>
    //       </div>
    //     </div>
    //   </nav>
    
    )
}
