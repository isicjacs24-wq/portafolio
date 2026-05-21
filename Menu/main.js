(function () {
  "use strict";

  // 📞 CONFIGURACIÓN DEL NEGOCIO - CAMBIA AQUÍ TU NÚMERO DE WHATSAPP
  var WHATSAPP_NUMBER = "528211421199"; // Número: +52 821 142 1199

  /* ══ MENÚ COMPLETO ══ */
  var MENU = [
    {
      cat: "🌮 TACOS Y TOSTADAS",
      icon: "fa-utensils",
      items: [
        {
          name: "Orden Carne Asada",
          desc: "5 tortillas dobles con carne asada y cebolla asada. Queso extra +$5.",
          variants: [{ label: "Carne Asada", price: 105 }],
          hasTortilla: true,
        },
        {
          name: "Orden de Trompo",
          desc: "5 tortillas dobles con carne de trompo y cebolla asada. Queso extra +$5.",
          variants: [{ label: "Trompo", price: 100 }],
          hasTortilla: true,
        },
        {
          name: "Orden de Campechanos",
          desc: "5 tortillas dobles con carne asada y trompo, cebolla asada. Queso extra +$5.",
          variants: [{ label: "Campechana", price: 120 }],
          hasTortilla: true,
        },
        {
          name: "Tacos Burguer / Especiales",
          desc: "5 tortillas con tu carne preferida, hamburguesa, jamón, queso y aguacate.",
          variants: [
            { label: "Carne Asada", price: 130 },
            { label: "Trompo", price: 140 },
            { label: "Campechana", price: 150 },
          ],
          hasTortilla: true,
        },
      ],
    },
    {
      cat: "LAS TAPAS",
      icon: "fa-drumstick-bite",
      items: [
        {
          name: "La Tapa",
          desc: "2 tortillas de harina con queso blanco, carne, jamón y aguacate.",
          variants: [
            { label: "Carne Asada", price: 130 },
            { label: "Trompo", price: 160 },
            { label: "Campechana", price: 170 },
          ],
          hasTortilla: false,
        },
        {
          name: "La Tapota",
          desc: "Versión grande con queso blanco, carne, jamón y aguacate.",
          variants: [
            { label: "Carne Asada", price: 170 },
            { label: "Trompo", price: 180 },
            { label: "Campechana", price: 200 },
          ],
          hasTortilla: false,
        },
      ],
    },
    {
      cat: "LOS PIRATAS",
      icon: "fa-skull-crossbones",
      items: [
        {
          name: "Pirata Chico",
          desc: "Tortilla de harina con queso blanco, carne, aguacate y cebolla asada.",
          variants: [
            { label: "Carne Asada", price: 110 },
            { label: "Trompo", price: 120 },
            { label: "Campechana", price: 140 },
          ],
          hasTortilla: false,
        },
        {
          name: "Pirata Grande",
          desc: "Tortilla grande con queso blanco, carne, aguacate y cebolla asada.",
          variants: [
            { label: "Carne Asada", price: 130 },
            { label: "Trompo", price: 140 },
            { label: "Campechana", price: 160 },
          ],
          hasTortilla: false,
        },
        {
          name: "Pirata Especial",
          desc: "Jamón, queso amarillo y blanco, carne, aguacate y cebolla asada.",
          variants: [
            { label: "Chico", price: 140 },
            { label: "Grande", price: 160 },
          ],
          hasTortilla: false,
        },
        {
          name: "Pirata Burger",
          desc: "Carne de hamburguesa, jamón, queso doble, carne, aguacate y cebolla asada.",
          variants: [
            { label: "Chico", price: 150 },
            { label: "Grande", price: 170 },
          ],
          hasTortilla: false,
        },
        {
          name: "Pirata Campechano (extra)",
          desc: "Agrega mezcla asada+trompo a cualquier pirata.",
          variants: [{ label: "+Campechano", price: 15, isExtra: true }],
          hasTortilla: false,
        },
      ],
    },
    {
      cat: "HAMBURGUESAS",
      icon: "fa-burger",
      items: [
        {
          name: "La Sencilla",
          desc: "1 carne, jamón, queso amarillo, lechuga, tomate, cebolla, aguacate y papas.",
          singlePrice: 80,
        },
        {
          name: "La Especial",
          desc: "1 carne, doble queso, jamón, lechuga, tomate, cebolla, aguacate y papas.",
          singlePrice: 90,
        },
        {
          name: "La Doble",
          desc: "2 carnes, jamón, queso amarillo, lechuga, tomate, cebolla, aguacate y papas.",
          singlePrice: 100,
        },
        {
          name: "La Súper",
          desc: "1 carne + carne asada, jamón, queso, lechuga, tomate, cebolla y aguacate.",
          singlePrice: 110,
        },
        {
          name: "La Mega",
          desc: "2 carnes + carne asada, jamón, doble queso, lechuga, tomate y aguacate.",
          singlePrice: 120,
        },
        {
          name: "La Jumbo",
          desc: "2 carnes, asada, salchichón, tocino, jamón, doble queso, lechuga y más.",
          singlePrice: 140,
        },
      ],
    },
    {
      cat: "PAPAS ASADAS",
      icon: "fa-seedling",
      items: [
        {
          name: "Papa Asada",
          desc: "Papa al carbón con queso blanco, jamón y totopos.",
          variants: [
            { label: "Carne Asada", price: 110 },
            { label: "Trompo", price: 120 },
            { label: "Campechana", price: 140 },
          ],
          hasTortilla: false,
        },
        {
          name: "Papa Burger",
          desc: "Papa asada con carne de hamburguesa, aguacate y queso.",
          variants: [
            { label: "Carne Asada", price: 130 },
            { label: "Trompo", price: 140 },
            { label: "Campechana", price: 160 },
          ],
          hasTortilla: false,
        },
      ],
    },
    {
      cat: "TORTAS",
      icon: "fa-bread-slice",
      items: [
        {
          name: "Torta",
          desc: "Pan de hamburguesa con queso blanco, lechuga, tomate, cebolla y aguacate.",
          variants: [
            { label: "Carne Asada", price: 85 },
            { label: "Trompo", price: 90 },
            { label: "Campechana", price: 100 },
          ],
          hasTortilla: false,
        },
      ],
    },
    {
      cat: "FRIJOLES Y EXTRAS",
      icon: "fa-bowl-food",
      items: [
        {
          name: "Frijoles",
          desc: "Frijoles puercos tradicionales.",
          variants: [
            { label: "Normal", price: 15 },
            { label: "Especial Chico", price: 20 },
            { label: "Especial Grande", price: 30 },
          ],
          hasTortilla: false,
        },
        {
          name: "Orden de Papas Fritas",
          desc: "Crujientes papas a la francesa.",
          singlePrice: 30,
        },
      ],
    },
    {
      cat: "BEBIDAS",
      icon: "fa-glass-water",
      items: [
        {
          name: "Refrescos / Aguas / Jugos",
          desc: "Coca-Cola, Sprite, Fanta · Aguas frescas (Jamaica, Horchata, Limón) · Jugos naturales.",
          singlePrice: 25,
        },
      ],
    },
  ];

  /* ══ VARIABLES GLOBALES ══ */
  var cart = [];
  var openTortilla = null;
  var serviceType = "delivery"; // 'delivery' o 'local'
  var mesaNumber = "1";

  /* ══ UTILIDADES ══ */
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function safeId(name) {
    return name.replace(/[^a-zA-Z0-9]/g, "");
  }

  function showToast(msg, type) {
    var t = document.createElement("div");
    t.className = "toast-msg";
    t.textContent = msg;
    if (type === "error") t.style.background = "#b91c1c";
    if (type === "info") t.style.background = "#1e40af";
    document.body.appendChild(t);
    setTimeout(function () {
      t.remove();
    }, 2200);
  }

  /* ══ CONFIGURACIÓN DE SERVICIO (LOCAL / DOMICILIO) ══ */
  function initServiceSelector() {
    var deliveryBtn = document.querySelector('[data-service="delivery"]');
    var localBtn = document.querySelector('[data-service="local"]');
    var mesaContainer = document.getElementById("mesaContainer");
    var mesaInput = document.getElementById("mesaNumber");

    if (deliveryBtn && localBtn) {
      deliveryBtn.addEventListener("click", function () {
        serviceType = "delivery";
        deliveryBtn.classList.add("active");
        localBtn.classList.remove("active");
        if (mesaContainer) mesaContainer.style.display = "none";
        showToast("🚚 Modo: Domicilio activado", "info");
      });

      localBtn.addEventListener("click", function () {
        serviceType = "local";
        localBtn.classList.add("active");
        deliveryBtn.classList.remove("active");
        if (mesaContainer) mesaContainer.style.display = "block";
        showToast("🏠 Modo: Consumo en Local activado", "info");
      });
    }

    if (mesaInput) {
      mesaInput.addEventListener("input", function (e) {
        mesaNumber = e.target.value || "1";
      });
      mesaNumber = mesaInput.value;
    }
  }

  /* ══ CARRITO ══ */
  function addToCart(displayName, price, tortilla) {
    var label = displayName + (tortilla ? " · Tortilla de " + tortilla : "");
    cart.push({ name: label, price: price });
    renderCart();
    showToast("➕ " + label + " · $" + price);
  }

  function removeFromCart(idx) {
    cart.splice(idx, 1);
    renderCart();
  }

  function renderCart() {
    var container = document.getElementById("cartItemsContainer");
    var totalEl = document.getElementById("cartTotalAmount");
    var countEl = document.getElementById("cartCount");
    if (!container) return;

    container.innerHTML = "";
    var total = 0;

    if (cart.length === 0) {
      container.innerHTML =
        '<p class="cart-empty">Aún no has agregado nada 🍽️</p>';
    } else {
      cart.forEach(function (item, idx) {
        total += item.price;
        var row = document.createElement("div");
        row.className = "cart-item-row";
        row.innerHTML =
          '<div class="cart-item-name">' +
          esc(item.name) +
          "</div>" +
          '<span class="cart-item-price me-2">$' +
          item.price +
          "</span>" +
          '<button class="cart-remove" data-idx="' +
          idx +
          '" aria-label="Quitar">✖</button>';
        container.appendChild(row);
      });

      container.querySelectorAll(".cart-remove").forEach(function (btn) {
        btn.addEventListener("click", function () {
          removeFromCart(parseInt(btn.getAttribute("data-idx"), 10));
        });
      });
    }

    totalEl.textContent = "$" + total;
    countEl.textContent = cart.length;
  }

  function closeOpenTortilla() {
    if (openTortilla) {
      openTortilla.innerHTML = "";
      openTortilla.style.display = "none";
      openTortilla = null;
    }
  }

  /* ══ RENDER MENÚ ══ */
  function renderMenu() {
    var root = document.getElementById("menuRoot");
    root.innerHTML = "";

    MENU.forEach(function (section) {
      var wrap = document.createElement("div");
      wrap.className = "mb-4 overflow-hidden rounded-3";
      wrap.style.cssText =
        "border:1px solid #ffebd2;background:#fff;box-shadow:0 6px 20px rgba(0,0,0,.05)";

      var head = document.createElement("div");
      head.className = "section-head";
      head.innerHTML =
        '<h2><i class="fas ' +
        section.icon +
        ' me-2"></i>' +
        section.cat +
        "</h2>";
      wrap.appendChild(head);

      var row = document.createElement("div");
      row.className = "row g-3 p-3";

      section.items.forEach(function (item) {
        var sid = safeId(item.name);

        var varHtml = "";
        if (item.variants && item.variants.length) {
          varHtml = '<div class="variant-group">';
          item.variants.forEach(function (v) {
            var extra = !!v.isExtra;
            varHtml +=
              '<button class="variant-btn"' +
              ' data-name="' +
              esc(item.name) +
              '"' +
              ' data-price="' +
              v.price +
              '"' +
              ' data-label="' +
              esc(v.label) +
              '"' +
              ' data-extra="' +
              extra +
              '"' +
              ' data-tortilla="' +
              (item.hasTortilla ? "true" : "false") +
              '"' +
              ' data-sid="' +
              sid +
              '">' +
              esc(v.label) +
              "<span>" +
              (extra ? "+" : "") +
              "$" +
              v.price +
              "</span>" +
              "</button>";
          });
          varHtml += "</div>";
          if (item.hasTortilla) {
            varHtml +=
              '<div id="tort-' +
              sid +
              '" class="tortilla-group" style="display:none"></div>';
          }
        } else if (item.singlePrice !== undefined) {
          varHtml =
            '<div class="variant-group">' +
            '<button class="variant-btn" style="flex:1"' +
            ' data-name="' +
            esc(item.name) +
            '"' +
            ' data-price="' +
            item.singlePrice +
            '"' +
            ' data-label="Único" data-extra="false" data-tortilla="false" data-sid="' +
            sid +
            '">' +
            "Agregar <span>$" +
            item.singlePrice +
            "</span>" +
            "</button></div>";
        }

        var col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-xl-4";
        col.innerHTML =
          '<div class="product-card">' +
          '<div class="card-icon-wrap"><i class="fas ' +
          section.icon +
          '"></i></div>' +
          '<div class="card-body-inner">' +
          '<div class="product-title">' +
          esc(item.name) +
          "</div>" +
          '<div class="product-desc">' +
          esc(item.desc) +
          "</div>" +
          varHtml +
          "</div>" +
          "</div>";

        row.appendChild(col);
      });

      wrap.appendChild(row);
      root.appendChild(wrap);
    });

    attachVariantEvents();
  }

  function attachVariantEvents() {
    document.querySelectorAll(".variant-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var name = btn.getAttribute("data-name");
        var price = parseFloat(btn.getAttribute("data-price"));
        var label = btn.getAttribute("data-label");
        var isExtra = btn.getAttribute("data-extra") === "true";
        var hasTort = btn.getAttribute("data-tortilla") === "true";
        var sid = btn.getAttribute("data-sid");
        var tortDiv = document.getElementById("tort-" + sid);

        if (openTortilla && openTortilla !== tortDiv) closeOpenTortilla();

        var displayName = isExtra ? name + " + " + label : name + " · " + label;

        if (hasTort && tortDiv) {
          tortDiv.innerHTML =
            '<button class="tortilla-btn" data-t="Harina">🌾 Tortilla de Harina</button>' +
            '<button class="tortilla-btn" data-t="Maíz">🌽 Tortilla de Maíz</button>';
          tortDiv.style.display = "flex";
          openTortilla = tortDiv;

          tortDiv.querySelectorAll(".tortilla-btn").forEach(function (tb) {
            tb.addEventListener("click", function (e) {
              e.stopPropagation();
              addToCart(displayName, price, tb.getAttribute("data-t"));
              closeOpenTortilla();
            });
          });
        } else {
          addToCart(displayName, price, null);
        }
      });
    });
  }

  /* ══ CONSTRUIR MENSAJE DE WHATSAPP ══ */
  function buildWAMsg() {
    var total = 0;
    var fecha = new Date().toLocaleString("es-MX");
    var titulo =
      serviceType === "delivery"
        ? "🚚 *NUEVO PEDIDO A DOMICILIO* 🚚"
        : "🏠 *NUEVO PEDIDO PARA CONSUMIR EN LOCAL* 🏠";

    var msg = "🔥 " + titulo + " 🔥%0A";
    msg += "📅 " + fecha + "%0A";
    msg += "━━━━━━━━━━━━━━━━━━━━%0A%0A";

    msg += "📋 *PRODUCTOS:*%0A";
    cart.forEach(function (i) {
      msg += "• " + encodeURIComponent(i.name) + "  →  $" + i.price + "%0A";
      total += i.price;
    });

    msg += "%0A━━━━━━━━━━━━━━━━━━━━%0A";
    msg += "💰 *TOTAL: $" + total + " MXN*%0A";

    if (serviceType === "local") {
      msg += "🪑 *MESA NÚMERO:* " + encodeURIComponent(mesaNumber) + "%0A";
    } else {
      msg += "📍 *DIRECCIÓN DE ENVÍO:* %0A";
      msg += "   (Escribe tu dirección aquí)%0A";
    }

    var notes = (
      (document.getElementById("orderNotes") || {}).value || ""
    ).trim();
    if (notes) {
      msg += "%0A📝 *NOTAS:*%0A";
      msg += "   " + encodeURIComponent(notes) + "%0A";
    }

    msg += "%0A━━━━━━━━━━━━━━━━━━━━%0A";
    msg += "🔥 ¡Gracias por tu preferencia! 🔥%0A";
    msg += "@elfogondelsabor";

    return msg;
  }

  function sendWhatsApp() {
    if (!cart.length) {
      showToast("🛒 Tu pedido está vacío.", "error");
      return;
    }
    window.open(
      "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + buildWAMsg(),
      "_blank",
    );
  }

  /* ══ IMPRIMIR TICKET MEJORADO PARA IMPRESORA TÉRMICA ══ */
  function printTicket() {
    if (!cart.length) {
      showToast("No hay productos para imprimir.", "error");
      return;
    }

    var total = 0;
    var rows = "";
    cart.forEach(function (i) {
      rows +=
        "<tr><td style='padding:4px 0'>" +
        esc(i.name) +
        "</td><td style='text-align:right'>$" +
        i.price +
        "</td></tr>";
      total += i.price;
    });

    var notes = (
      (document.getElementById("orderNotes") || {}).value || ""
    ).trim();
    var fecha = new Date().toLocaleString("es-MX");
    var hora = new Date().toLocaleTimeString("es-MX");

    var ticketHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Ticket Pedido - El Fogón del Sabor</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          @media print {
            body { margin: 0; padding: 0; }
            .no-print { display: none; }
            button { display: none; }
          }
          body {
            font-family: 'Courier New', 'Lucida Console', monospace;
            font-size: 12px;
            width: 80mm;
            margin: 0 auto;
            padding: 8px;
            background: white;
          }
          .header {
            text-align: center;
            margin-bottom: 10px;
            padding-bottom: 5px;
            border-bottom: 1px dashed #000;
          }
          .header h1 {
            font-size: 18px;
            letter-spacing: 2px;
            margin: 0;
            color: #e85d04;
          }
          .header p {
            font-size: 9px;
            margin: 3px 0;
          }
          .service-info {
            text-align: center;
            padding: 6px;
            margin: 8px 0;
            background: #f0f0f0;
            font-weight: bold;
            font-size: 11px;
          }
          .divider {
            border-top: 1px dashed #000;
            margin: 6px 0;
          }
          table {
            width: 100%;
            margin: 8px 0;
            border-collapse: collapse;
          }
          th {
            text-align: left;
            border-bottom: 1px solid #000;
            padding-bottom: 3px;
            font-size: 11px;
          }
          td {
            padding: 4px 0;
          }
          .total-row {
            text-align: right;
            font-weight: bold;
            font-size: 14px;
            border-top: 1px solid #000;
            padding-top: 6px;
            margin-top: 6px;
          }
          .notes {
            background: #f9f9f9;
            padding: 6px;
            margin: 8px 0;
            font-size: 10px;
            border-left: 3px solid #e85d04;
          }
          .footer {
            text-align: center;
            margin-top: 12px;
            padding-top: 6px;
            border-top: 1px dashed #000;
            font-size: 9px;
          }
          .thanks {
            text-align: center;
            font-weight: bold;
            margin: 8px 0;
            font-size: 11px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🔥 EL FOGÓN DEL SABOR</h1>
          <p>Av. Fogón Norte #432, Col. Centro, Monterrey, NL</p>
          <p>Tel: +52 821 142 1199</p>
          <p>${fecha}  |  ${hora}</p>
        </div>
        
        <div class="service-info">
          ${serviceType === "local" ? "🏠 CONSUMO EN LOCAL - MESA #" + esc(mesaNumber) : "🚚 PEDIDO A DOMICILIO"}
        </div>
        
        <div class="divider"></div>
        
        <table>
          <thead>
            <tr><th>PRODUCTO</th><th style="text-align:right">PRECIO</th></tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
        
        <div class="total-row">
          TOTAL: $${total} MXN
        </div>
        
        ${
          notes
            ? `
        <div class="divider"></div>
        <div class="notes">
          <strong>📝 NOTAS ESPECIALES:</strong><br>
          ${esc(notes)}
        </div>
        `
            : ""
        }
        
        <div class="thanks">
          ¡GRACIAS POR TU PEDIDO!
        </div>
        
        <div class="footer">
          <p>Síguenos en Instagram: @elfogondelsabor</p>
          <p>Horario: Lun-Dom 1pm - 1am</p>
          <p>*** Este ticket es tu comprobante ***</p>
        </div>
        
        <div class="no-print" style="text-align:center; margin-top:15px; padding:10px; border-top:1px solid #ccc;">
          <button onclick="window.print()" style="padding:8px 16px; background:#e85d04; color:white; border:none; border-radius:5px; cursor:pointer;">
            🖨️ Imprimir Ticket
          </button>
        </div>
      </body>
      </html>
    `;

    var win = window.open("", "_blank");
    win.document.write(ticketHtml);
    win.document.close();
  }

  /* ══ INICIALIZAR COMPONENTES ══ */
  function initCartToggle() {
    var widget = document.getElementById("cartWidget");
    var toggle = document.getElementById("cartToggle");
    if (!toggle || !widget) return;
    toggle.addEventListener("click", function () {
      widget.classList.toggle("collapsed");
    });
  }

  function bindButtons() {
    var pairs = [
      ["globalWaBtn", sendWhatsApp],
      ["globalPrintBtn", printTicket],
      ["cartWaBtn", sendWhatsApp],
      ["cartPrintBtn", printTicket],
    ];
    pairs.forEach(function (pair) {
      var el = document.getElementById(pair[0]);
      if (el) {
        el.addEventListener("click", function (e) {
          e.stopPropagation();
          pair[1]();
        });
      }
    });
  }

  /* ══ EJECUCIÓN INICIAL ══ */
  renderMenu();
  renderCart();
  bindButtons();
  initCartToggle();
  initServiceSelector();
})();
