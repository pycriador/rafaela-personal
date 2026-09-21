/**
 * SITE PERSONAL RAFAELA — Módulo WhatsApp
 * 
 * Centraliza a criação de links e abertura do WhatsApp com mensagens pré-configuradas.
 * Não duplica números de telefone. Utiliza sempre SITE_CONFIG.
 */

(function () {
  'use strict';

  /**
   * Gera a URL de abertura do WhatsApp
   * @param {string} message 
   * @returns {string}
   */
  function buildWhatsAppUrl(message) {
    const rawNumber = (SITE_CONFIG && SITE_CONFIG.contact && SITE_CONFIG.contact.whatsapp) || "5511999999999";
    const cleanNumber = rawNumber.replace(/\D/g, "");
    const encodedMessage = encodeURIComponent(message.trim());
    return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
  }

  /**
   * Abre o WhatsApp em uma nova aba com a mensagem especificada
   * @param {string} messageOrKey - Chave definida em SITE_CONFIG.whatsappMessages ou texto direto
   */
  function openWhatsApp(messageOrKey) {
    let finalMessage = messageOrKey;

    if (SITE_CONFIG && SITE_CONFIG.whatsappMessages && SITE_CONFIG.whatsappMessages[messageOrKey]) {
      finalMessage = SITE_CONFIG.whatsappMessages[messageOrKey];
    } else if (!finalMessage) {
      finalMessage = (SITE_CONFIG && SITE_CONFIG.whatsappMessages && SITE_CONFIG.whatsappMessages.default) || "Olá Rafaela!";
    }

    const url = buildWhatsAppUrl(finalMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // Exporta globalmente para fácil acesso nos templates e botões
  window.openWhatsApp = openWhatsApp;
  window.buildWhatsAppUrl = buildWhatsAppUrl;

  /**
   * Inicializa ouvintes para elementos declarativos que utilizam data-whatsapp-msg
   */
  document.addEventListener('DOMContentLoaded', function () {
    const triggers = document.querySelectorAll('[data-whatsapp-msg]');

    triggers.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        // Se for um link de navegação padrão, previne o salto para que abra o WhatsApp
        e.preventDefault();
        const msgKey = btn.getAttribute('data-whatsapp-msg');
        openWhatsApp(msgKey);
      });
    });
  });
})();
