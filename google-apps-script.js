// ============================================================
// GOOGLE APPS SCRIPT — Cole este código no Google Apps Script
// ============================================================
// INSTRUÇÕES:
// 1. Abra o Google Sheets e crie uma nova planilha
// 2. Renomeie a aba para "Resultados DISC"
// 3. Na linha 1, coloque os cabeçalhos:
//    A1: Data | B1: Nome | C1: E-mail | D1: Perfil Dominante
//    E1: Dominância (%) | F1: Influência (%) | G1: Estabilidade (%)
//    H1: Conformidade (%) | I1: Detalhes
// 4. Vá em Extensões > Apps Script
// 5. Apague tudo e cole este código
// 6. Clique em "Implantar" > "Nova implantação"
// 7. Tipo: "App da Web"
// 8. Executar como: "Eu" (sua conta)
// 9. Quem tem acesso: "Qualquer pessoa"
// 10. Clique "Implantar" e copie a URL gerada
// 11. Cole a URL em script.js na variável GOOGLE_SCRIPT_URL
// ============================================================

const EMAIL_DESTINO = 'bancodetalentos.comercial@gmail.com';
const NOME_PLANILHA = 'Resultados DISC';

function doPost(e) {
    try {
        const data = JSON.parse(e.postData.contents);

        // Abre a planilha ativa
        const ss = SpreadsheetApp.getActiveSpreadsheet();
        const sheet = ss.getSheetByName(NOME_PLANILHA) || ss.getSheets()[0];

        // Adiciona os dados na próxima linha vazia
        sheet.appendRow([
            new Date().toLocaleString('pt-BR'),
            data.nome,
            data.email,
            data.perfilDominante,
            data.scoreD,
            data.scoreI,
            data.scoreS,
            data.scoreC,
            data.detalhes
        ]);

        // Envia o e-mail com os resultados
        const assunto = '📋 Novo Resultado DISC - ' + data.nome;
        const corpo = montarEmailHTML(data);

        GmailApp.sendEmail(EMAIL_DESTINO, assunto, '', {
            htmlBody: corpo,
            name: 'Teste DISC - Banco de Talentos'
        });

        // Retorna sucesso
        return ContentService
            .createTextOutput(JSON.stringify({ success: true, message: 'Dados salvos e e-mail enviado!' }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        return ContentService
            .createTextOutput(JSON.stringify({ success: false, message: error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

function doGet(e) {
    return ContentService
        .createTextOutput(JSON.stringify({ status: 'ok', message: 'Serviço ativo!' }))
        .setMimeType(ContentService.MimeType.JSON);
}

function montarEmailHTML(data) {
    const cores = {
        'Dominância': '#e74c3c',
        'Influência': '#f1c40f',
        'Estabilidade': '#2ecc71',
        'Conformidade': '#3498db'
    };

    const cor = cores[data.perfilDominante] || '#d4a853';

    return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #f0f0f5; border-radius: 16px; overflow: hidden;">
      
      <div style="background: linear-gradient(135deg, #1a1a26, #12121a); padding: 32px; text-align: center; border-bottom: 2px solid ${cor};">
        <h1 style="margin: 0; color: #d4a853; font-size: 24px;">📋 Novo Resultado DISC</h1>
        <p style="margin: 8px 0 0; color: #a0a0b8; font-size: 14px;">${new Date().toLocaleString('pt-BR')}</p>
      </div>
      
      <div style="padding: 32px;">
        <div style="background: #1a1a26; border-radius: 12px; padding: 20px; margin-bottom: 20px; border-left: 4px solid #d4a853;">
          <p style="margin: 0 0 8px; color: #a0a0b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Candidato</p>
          <p style="margin: 0; font-size: 18px; font-weight: bold; color: #f0f0f5;">${data.nome}</p>
          <p style="margin: 4px 0 0; color: #a0a0b8;">${data.email}</p>
        </div>
        
        <div style="background: #1a1a26; border-radius: 12px; padding: 20px; margin-bottom: 20px; text-align: center; border: 1px solid ${cor}33;">
          <p style="margin: 0 0 4px; color: #a0a0b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Perfil Dominante</p>
          <h2 style="margin: 0; color: ${cor}; font-size: 28px;">${data.perfilDominante}</h2>
        </div>
        
        <div style="background: #1a1a26; border-radius: 12px; padding: 20px; margin-bottom: 20px;">
          <p style="margin: 0 0 16px; color: #a0a0b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Pontuações</p>
          
          <div style="margin-bottom: 12px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span style="color: #f0f0f5; font-weight: bold;">D - Dominância</span>
              <span style="color: #e74c3c; font-weight: bold;">${data.scoreD}</span>
            </div>
            <div style="background: #22223a; border-radius: 4px; height: 8px; overflow: hidden;">
              <div style="background: #e74c3c; height: 100%; width: ${data.scoreD}; border-radius: 4px;"></div>
            </div>
          </div>
          
          <div style="margin-bottom: 12px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span style="color: #f0f0f5; font-weight: bold;">I - Influência</span>
              <span style="color: #f1c40f; font-weight: bold;">${data.scoreI}</span>
            </div>
            <div style="background: #22223a; border-radius: 4px; height: 8px; overflow: hidden;">
              <div style="background: #f1c40f; height: 100%; width: ${data.scoreI}; border-radius: 4px;"></div>
            </div>
          </div>
          
          <div style="margin-bottom: 12px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span style="color: #f0f0f5; font-weight: bold;">S - Estabilidade</span>
              <span style="color: #2ecc71; font-weight: bold;">${data.scoreS}</span>
            </div>
            <div style="background: #22223a; border-radius: 4px; height: 8px; overflow: hidden;">
              <div style="background: #2ecc71; height: 100%; width: ${data.scoreS}; border-radius: 4px;"></div>
            </div>
          </div>
          
          <div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span style="color: #f0f0f5; font-weight: bold;">C - Conformidade</span>
              <span style="color: #3498db; font-weight: bold;">${data.scoreC}</span>
            </div>
            <div style="background: #22223a; border-radius: 4px; height: 8px; overflow: hidden;">
              <div style="background: #3498db; height: 100%; width: ${data.scoreC}; border-radius: 4px;"></div>
            </div>
          </div>
        </div>
        
        <div style="background: #1a1a26; border-radius: 12px; padding: 20px;">
          <p style="margin: 0 0 12px; color: #a0a0b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Análise Detalhada</p>
          <p style="margin: 0; color: #a0a0b8; font-size: 14px; line-height: 1.7; white-space: pre-line;">${data.detalhes}</p>
        </div>
      </div>
      
      <div style="padding: 20px 32px; text-align: center; border-top: 1px solid #22223a;">
        <p style="margin: 0; color: #6b6b82; font-size: 12px;">Resultado gerado automaticamente pelo Teste DISC</p>
      </div>
    </div>
  `;
}
