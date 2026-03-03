
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.SgEEXGFS.js","/cdn/shopifycloud/checkout-web/assets/c1/app.B5okP2xC.js","/cdn/shopifycloud/checkout-web/assets/c1/vendor.Bz9Z-7yG.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-es.D62TVOBN.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.CzUtbcKx.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice.D1D_MWyR.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalPickup.DrRqOLZl.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.h-O5O2CO.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment.hZbLXLyq.js","/cdn/shopifycloud/checkout-web/assets/c1/PickupPointCarrierLogo.D159dL9y.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks.12iFtXe7.js","/cdn/shopifycloud/checkout-web/assets/c1/AddDiscountButton.C71UmJqT.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText.Bnrjg9oi.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.CfwPUF1p.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.PcZrCsNH.js","/cdn/shopifycloud/checkout-web/assets/c1/OrderEditVaultedDelivery.C0-r0Xwv.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList.DDNQ3D-F.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayErrorBanner.DOIhLO9V.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPaySessionTokenStorage.DElEol8b.js","/cdn/shopifycloud/checkout-web/assets/c1/flags.C8i2mhj-.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions.DsbS07zs.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.BBwOIn0d.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.2DZgX3MT.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension.De4xtBKW.js","/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions.DjLhWp1j.js","/cdn/shopifycloud/checkout-web/assets/c1/rendering-extension-targets.vkHmRfXh.js","/cdn/shopifycloud/checkout-web/assets/c1/v4.BKrj-4V8.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner.DNGnkg3s.js","/cdn/shopifycloud/checkout-web/assets/c1/Page.BQazEKf3.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.DNvopiKf.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.CE9c_W0d.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalPickup.BhtheElV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AddDiscountButton.CZ33y7Va.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.7lB-c-sA.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayLogo.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DutyOptions.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PickupPointCarrierLogo.DuZuWHqZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RuntimeExtension.DWkDBM73.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AnnouncementRuntimeExtensions.V0VYEO4K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Page.BYM12A8B.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0888/6016/4424/files/Sin_titulo_72_x_12_in_1_x320.png?v=1752150097"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  