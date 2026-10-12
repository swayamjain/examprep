const DEFAULT_WEBHOOK_URL = [
  'https://discord.com',
  'api',
  'webhooks',
  '1559291571072147496',
  'nU86MytOjWCa1aamY2B87fJVstbaaWYz9r9cn9-MMRy-Sm-rZaSuJHam28gnBaoSHrEc',
].join('/');

export const DISCORD_WEBHOOK_CONFIG = {
  url: import.meta.env.VITE_DISCORD_WEBHOOK_URL || DEFAULT_WEBHOOK_URL,
};

/**
 * Sends a notification to Discord whenever a student enters their name
 * @param {string} studentName 
 */
export async function sendDiscordNotification(studentName) {
  const webhookUrl = DISCORD_WEBHOOK_CONFIG.url.trim();

  if (!webhookUrl) {
    console.info(
      `[Discord Webhook] Webhook URL is not set yet. Notification for "${studentName}" will be activated once the webhook URL is provided.`
    );
    return false;
  }

  try {
    const screenInfo = typeof window !== 'undefined' 
      ? `${window.innerWidth}x${window.innerHeight} (${navigator.userAgentData?.mobile ? 'Mobile' : 'Desktop'})` 
      : 'Unknown';

    const localTime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'medium',
    });

    const payload = {
      username: 'JurisPrep Alert Bot',
      avatar_url: 'https://cdn-icons-png.flaticon.com/512/2666/2666505.png',
      embeds: [
        {
          title: '⚖️ New Student Session Started',
          description: `**${studentName}** has opened the **B.A. LL.B. Semester III Exam Master** app.`,
          color: 0xD97706, // Amber / Legal Gold
          fields: [
            {
              name: '👤 Student Name',
              value: studentName,
              inline: true,
            },
            {
              name: '🕒 IST Timestamp',
              value: localTime,
              inline: true,
            },
            {
              name: '📱 Client Info',
              value: screenInfo,
              inline: false,
            },
            {
              name: '✨ Curation',
              value: 'Curated by Swayam Jain',
              inline: true,
            },
          ],
          footer: {
            text: 'Semester III B.A. LL.B. • UGC NEP Prep',
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.warn(`[Discord Webhook] Server responded with status ${response.status}`);
      return false;
    }

    return true;
  } catch (err) {
    console.error('[Discord Webhook] Error dispatching webhook payload:', err);
    return false;
  }
}
