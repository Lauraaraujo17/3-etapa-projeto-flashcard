import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="items-position">
    <div className="main-footer">
      <div className="containertwo">
        <div className="rowtwo">
          <div className="col">
            <h4>Endereço</h4>
            <h1 className="list-unstyled">
              <li>Brasil</li>
              <li>São Paulo, SP.</li>
              <li>R. Avenida Brasil, 5555</li>
            </h1>
          </div>
          <div className="col">
            <h4>Parceiros</h4>
            <ui className="list-unstyled">
              <li>Ruby Rose</li>
              <li>Laura Ventura</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Apoio</h4>
            <ui className="list-unstyled">
              <li>UNASP</li>
              <li>Professores</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Laura Araújo | Todos os Direitos Reservados |
            Termos de Serviço | Política de Privacidade
          </p>
        </div>
      </div>
    </div>

    </div>
  
  );
}

export default Footer;
