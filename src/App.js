import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Css Ölçü Birimleri</h1>
      <h2>Absolute Units</h2>
      <hr />
      <p>
        Mutlak uzunluk birimleri sabittir ve bunlardan herhangi biri ile ifade
        edilen bir uzunluk, tam olarak verilen boyutta görünecektir.
      </p>
      <table style={{ border: '1px solid' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid' }}>10 CM</th>
            <th style={{ border: '1px solid' }}>50 MM</th>
            <th style={{ border: '1px solid' }}>3 IN</th>
            <th style={{ border: '1px solid' }}>150 PX</th>
            <th style={{ border: '1px solid' }}>40 PT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid' }}>
              {' '}
              <div
                style={{ background: 'red', width: '10cm', height: '10cm' }}
              />
            </td>
            <td style={{ border: '1px solid' }}>
              {' '}
              <div
                style={{ background: 'blue', width: '50mm', height: '50mm' }}
              />
            </td>
            <td style={{ border: '1px solid' }}>
              {' '}
              <div
                style={{ background: 'wheat', width: '3in', height: '3in' }}
              />
            </td>
            <td style={{ border: '1px solid' }}>
              {' '}
              <div
                style={{
                  background: 'orange',
                  width: '150px',
                  height: '150px',
                }}
              />
            </td>
            <td style={{ border: '1px solid' }}>
              {' '}
              <div
                style={{
                  background: 'orange',
                  width: '40pt',
                  height: '40pt',
                }}
              >
                <p style={{ fontSize: '20pt' }}>Data</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Relative Units</h2>

      <hr />
      <p>
        Göreceği uzunluk birimleri değişkendir. Sayfa veya ekran boyutu vb.
        etkenlere göre değerleri değişen ölçü birimleridir. Yani 1920x1080
        çözünürlüğe göre yapılmış bir ölçülendirme 1366x768 çözünürlükte
        açıldığı zaman yeniden ölçeklenecektir.
      </p>

      <table style={{ border: '1px solid' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid' }}>3 em</th>
            <th style={{ border: '1px solid' }}>2 rem</th>
            <th style={{ border: '1px solid' }}>10 vw</th>
            <th style={{ border: '1px solid' }}>10 vh</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid' }}>
              <div style={{ fontSize: '10pt' }}>
                <p style={{ fontSize: '2em' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </td>
            <td style={{ border: '1px solid' }}>
              <div style={{ fontSize: '10pt' }}>
                <p style={{ fontSize: '2rem' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </td>
            <td style={{ border: '1px solid' }}>
              <div
                style={{
                  background: 'red',
                  width: '10vw',
                  height: '10vh',
                }}
              />
            </td>
            <td style={{ border: '1px solid' }}>
              <div
                style={{
                  background: 'red',
                  width: '10vw',
                  height: '10vh',
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
