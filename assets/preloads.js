
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.CgsWKOqO.js","/cdn/shopifycloud/checkout-web/assets/c1/app.DStq_RaI.js","/cdn/shopifycloud/checkout-web/assets/c1/vendor.DEVRFdKr.js","/cdn/shopifycloud/checkout-web/assets/c1/browser.fao9JABc.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground.D7YENLkR.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-discount-offer.DM8b2GuN.js","/cdn/shopifycloud/checkout-web/assets/c1/alternativePaymentCurrency.DoKxGMmL.js","/cdn/shopifycloud/checkout-web/assets/c1/proposal.ClD-gb77.js","/cdn/shopifycloud/checkout-web/assets/c1/ButtonWithRegisterWebPixel.DzHOobfe.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.pCly8RsJ.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.Dnks0jV0.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.DqICx2KW.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalPickup.C1wMMWtC.js","/cdn/shopifycloud/checkout-web/assets/c1/Page.DJfALRvG.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.BEbZJ9QU.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment.D5pTBPJi.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer.CtDzBJbc.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummary.BShm5zMw.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.BHbahTp9.js","/cdn/shopifycloud/checkout-web/assets/c1/PickupPointCarrierLogo.Bxb3ohWO.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks.Fh5e0Ozl.js","/cdn/shopifycloud/checkout-web/assets/c1/AddDiscountButton.KC9Be6uj.js","/cdn/shopifycloud/checkout-web/assets/c1/useShowShopPayOptin.BmZlrZ0G.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.DHAfXYdL.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText.iv2sNLdS.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.BqVu_VBh.js","/cdn/shopifycloud/checkout-web/assets/c1/OrderEditVaultedDelivery.Btx_YTU2.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice.C43dkMKE.js","/cdn/shopifycloud/checkout-web/assets/c1/useHasOrdersFromMultipleShops.BVdTWK9W.js","/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed.Urd5ez09.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList.mY6q7FYA.js","/cdn/shopifycloud/checkout-web/assets/c1/flags.jD9STP3k.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.D16K2J3E.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.D82c5HeN.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-options.45BpnXQY.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions.DFj4ymUR.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.CXfeI3aB.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.BSabtTNi.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.D7EkV1ZR.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/FullScreenBackground.B_iZlQze.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ButtonWithRegisterWebPixel.DwNZVvkR.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.CKTqepKH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalPickup.BhtheElV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AddDiscountButton.CZ33y7Va.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.7lB-c-sA.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayLogo.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Page.BYM12A8B.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DutyOptions.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PickupPointCarrierLogo.DuZuWHqZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.BSemv9tH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OffsitePaymentFailed.CpFaJIpx.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

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
  