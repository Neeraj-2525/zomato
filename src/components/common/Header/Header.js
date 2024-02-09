import React from 'react'
import './Header.css'

const Header = () => {
  return (



    <div className='header'>
      <header className='maxWidth'>
        <nav>
          <div className="headerLogo">
            <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt="header Logo" />
          </div>

          <ul className="navigation d-flex justify-content-between align-items-center">
            <li tabIndex={0} className='leftNav'>
              <div className="locSearchContainer">
                <div className="loc">
                  <i class="locIcon absoluteCenter" color="#FF7E8B" size="20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FF7E8B" width="20" height="20" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iRDDBk"><title>location-fill</title><path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path></svg>
                  </i>

                  <div className="locSelect" >
                    <input type="text" placeholder='Sector 29, Grurgram' />
                  </div>

                  {/* <span class="fa-solid fa-caret-down locationCaretDown" role='button' data-bs-toggle="collapse" data-bs-target="#locDropdown"></span> */}
                  <i class="locationCaretDown absoluteCenter" role='button' data-bs-toggle="collapse" data-bs-target="#locDropdown" color="#4F4F4F" size="12"><svg xmlns="http://www.w3.org/2000/svg" fill="#4F4F4F" width="13" height="13" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 ezrcri"><title>down-triangle</title><path d="M20 5.42l-10 10-10-10h20z"></path></svg></i>

                  <div className="dropdown high-zi collapse" id='locDropdown'>
                    <div className="detectLocContainer">
                      <div className="detectLoc">
                        <div className="detectLocIconCont ">
                          <i class="detectLocIcon absoluteCenter" color="#EF4F5F" size="14"><svg xmlns="http://www.w3.org/2000/svg" fill="#EF4F5F" width="14" height="14" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 kyPUnV"><title>current-location</title><path d="M13.58 10c0 1.977-1.603 3.58-3.58 3.58s-3.58-1.603-3.58-3.58c0-1.977 1.603-3.58 3.58-3.58v0c1.977 0 3.58 1.603 3.58 3.58v0zM20 9.52v0.96c0 0.265-0.215 0.48-0.48 0.48v0h-1.72c-0.447 3.584-3.256 6.393-6.802 6.836l-0.038 0.004v1.72c0 0.265-0.215 0.48-0.48 0.48v0h-0.96c-0.265 0-0.48-0.215-0.48-0.48v0-1.72c-3.575-0.455-6.375-3.262-6.816-6.802l-0.004-0.038h-1.74c-0.265 0-0.48-0.215-0.48-0.48v0-0.96c0-0.265 0.215-0.48 0.48-0.48v0h1.74c0.445-3.578 3.245-6.385 6.781-6.836l0.039-0.004v-1.72c0-0.265 0.215-0.48 0.48-0.48v0h0.96c0.265 0 0.48 0.215 0.48 0.48v0 1.72c3.584 0.447 6.393 3.256 6.836 6.802l0.004 0.038h1.72c0.265 0 0.48 0.215 0.48 0.48v0zM15.96 10c0-3.292-2.668-5.96-5.96-5.96s-5.96 2.668-5.96 5.96c0 3.292 2.668 5.96 5.96 5.96v0c3.292 0 5.96-2.668 5.96-5.96v0z"></path></svg></i>
                        </div>
                        <p >Detect current location</p>
                      </div>
                      <span>Using GPS</span>
                    </div>

                    <div className="addressContainer">
                      <div className="address">
                      <i class="addIcon absoluteCenter" color="#FF7E8B" size="20"><svg xmlns="http://www.w3.org/2000/svg" fill="#FF7E8B" width="20" height="20" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iRDDBk"><title>plus</title><path d="M15.5 9.42h-4.5v-4.5c0-0.56-0.44-1-1-1s-1 0.44-1 1v4.5h-4.5c-0.56 0-1 0.44-1 1s0.44 1 1 1h4.5v4.5c0 0.54 0.44 1 1 1s1-0.46 1-1v-4.5h4.5c0.56 0 1-0.46 1-1s-0.44-1-1-1z"></path></svg></i>
                      <p color='#FF7E8B'>Add address</p>
                      </div>
                    </div>

                    <div className="saveAdd">Saved Addresses</div>
                    <div className="savedAddress">
                      <div className="homeIconCont">
                      <i class="homeIcon" size="15" color="#1C1C1C"><svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="15" height="15" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 jKmKoK"><path d="M19.76 7.84001L10.4 0.560011L10.28 0.500011H10.2C10.14 0.480011 10.0717 0.469177 10 0.469177C9.92835 0.469177 9.86002 0.480844 9.79502 0.501677L9.80002 0.500011H9.72002L9.62002 0.540011L6.66002 2.84001V1.46001C6.64919 1.12168 6.37835 0.850844 6.04085 0.840011H6.04002H3.76002C3.41335 0.840011 3.13169 1.11501 3.12002 1.45918V1.46001V5.62001L0.240021 7.84001C0.0941878 7.95418 0.000854492 8.13084 0.000854492 8.32918C0.000854492 8.47751 0.0533545 8.61418 0.140854 8.72168L0.140021 8.72084C0.254188 8.86084 0.427521 8.95001 0.621688 8.95001C0.765021 8.95001 0.896688 8.90168 1.00169 8.82001L1.00002 8.82084L2.30002 7.82084V16.4608C2.31085 16.7992 2.58169 17.07 2.91919 17.0808H2.92002H17.08C17.4184 17.07 17.6892 16.7992 17.7 16.4617V16.4608V7.82084L19 8.82084C19.1025 8.90584 19.235 8.95751 19.3792 8.96084H19.38C19.575 8.95751 19.7475 8.86501 19.8592 8.72251L19.86 8.72084C19.9467 8.61501 19.9992 8.47834 19.9992 8.33001C19.9992 8.13168 19.9067 7.95584 19.7617 7.84168L19.76 7.84084V7.84001ZM4.38002 4.50001V2.08001H5.42002V3.82001L5.36002 3.86001L4.38002 4.50001ZM7.92002 15.84V10.42H12.08V15.84H7.92002ZM16.46 15.84H13.34V9.80001C13.34 9.44668 13.0534 9.16001 12.7 9.16001H7.30002C6.94669 9.16001 6.66002 9.44668 6.66002 9.80001V15.84H3.54002V6.96001L10 1.84001L16.46 6.96001V15.84ZM18.76 17.7H1.26002C0.911688 17.7 0.630021 17.9817 0.630021 18.33C0.630021 18.6783 0.911688 18.96 1.26002 18.96H18.76C19.1084 18.96 19.39 18.6783 19.39 18.33C19.39 17.9817 19.1084 17.7 18.76 17.7Z"></path></svg></i>
                      </div>

                      <div className="savedAddressName">
                        <p>Home</p>
                        <p>xyz-123 Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="line"></div>
                <div className="searchContainer">
                  <div className="searchIconContainer absoluteCenter">
                    <i class="searchIcon" color="#828282" size="18"><svg xmlns="http://www.w3.org/2000/svg" fill="#828282" width="20" height="20" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>Search</title><path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path></svg></i>
                  </div>
                  <input className='searchInp' type="text" placeholder='Search for restaurant, cuisine or a dish' />
                </div>

              </div>
            </li>

            <li tabIndex={0}>
              <div className="profileContainer absoluteCenter">
                <img src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&amp;crop=100%3A100%3B%2A%2C%2A" alt='userImage' className="profileImg" />
                <span className="user">Neeraj</span>
                <i class="downArrow" size="18" color="#1C1C1C"><svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>chevron-down</title><path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path></svg></i>
              </div>
            </li>
          </ul>
        </nav>
      </header>


    </div>
  )
}

export default Header
