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

function getISTTimestamp() {
  return new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'medium',
  });
}

async function postDiscordEmbed(embed, label = 'notification') {
  const webhookUrl = DISCORD_WEBHOOK_CONFIG.url.trim();

  if (!webhookUrl) {
    console.info(`[Discord Webhook] Webhook URL is not set yet. Skipped ${label}.`);
    return false;
  }

  try {
    const payload = {
      username: 'JurisPrep Alert Bot',
      avatar_url: 'https://cdn-icons-png.flaticon.com/512/2666/2666505.png',
      embeds: [
        {
          ...embed,
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

/**
 * Sends a notification to Discord whenever a student enters their name
 * @param {string} studentName
 */
export async function sendDiscordNotification(studentName) {
  const screenInfo = typeof window !== 'undefined'
    ? `${window.innerWidth}x${window.innerHeight} (${navigator.userAgentData?.mobile ? 'Mobile' : 'Desktop'})`
    : 'Unknown';

  return postDiscordEmbed(
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
          value: getISTTimestamp(),
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
    },
    `session for "${studentName}"`
  );
}

/**
 * Detects whether the current visitor is on an iPhone or an HP / Windows laptop
 */
async function detectTargetDevice() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return null;
  }

  const ua = navigator.userAgent || '';
  const platform = navigator.platform || '';
  let model = '';
  let uaPlatform = navigator.userAgentData?.platform || platform || 'Unknown';

  if (navigator.userAgentData?.getHighEntropyValues) {
    try {
      const hints = await navigator.userAgentData.getHighEntropyValues(['model', 'platform']);
      model = hints.model || '';
      uaPlatform = hints.platform || uaPlatform;
    } catch {
      // Ignore if browser restricts high-entropy hints
    }
  }

  const isIPhone = /iPhone/i.test(ua) || /iPhone/i.test(platform);
  const isExplicitHP = /\bHP\b|Hewlett-Packard/i.test(`${ua} ${model}`);
  const isWindowsLaptop =
    (/Windows NT/i.test(ua) || /Windows/i.test(uaPlatform)) &&
    !/Mobile|Android|iPhone/i.test(ua);

  if (!isIPhone && !isExplicitHP && !isWindowsLaptop) {
    return null;
  }

  return {
    isIPhone,
    isExplicitHP,
    isWindowsLaptop,
    ua,
    uaPlatform,
    model,
    screen: `${window.innerWidth}x${window.innerHeight}`,
  };
}

/**
 * Sends a Discord alert whenever an iPhone or HP / Windows laptop accesses the website
 * @param {string} studentName
 */
export async function sendDeviceAccessNotification(studentName = '') {
  const device = await detectTargetDevice();
  if (!device) return false;

  const deviceLabel = device.isIPhone
    ? 'iPhone'
    : device.isExplicitHP
      ? 'HP Laptop'
      : 'Windows Laptop / PC (HP / Windows)';

  const title = device.isIPhone
    ? '📱 iPhone Accessed ExamPrep'
    : device.isExplicitHP
      ? '💻 HP Laptop Accessed ExamPrep'
      : '💻 Windows Laptop / PC Accessed ExamPrep';

  const description = device.isIPhone
    ? 'An **iPhone** just opened the **ExamPrep** website.'
    : device.isExplicitHP
      ? 'An **HP Laptop** just opened the **ExamPrep** website.'
      : 'A **Windows Laptop / PC** just opened the **ExamPrep** website *(note: standard browsers hide laptop brand names like HP for privacy)*.';

  return postDiscordEmbed(
    {
      title,
      description,
      color: device.isIPhone ? 0x3B82F6 : 0x10B981,
      fields: [
        {
          name: '👤 Student Name',
          value: studentName.trim() || 'Guest (not entered yet)',
          inline: true,
        },
        {
          name: '🖥️ Device Detected',
          value: deviceLabel,
          inline: true,
        },
        {
          name: '📐 Screen & Platform',
          value: `${device.screen} • ${device.uaPlatform}${device.model ? ` (${device.model})` : ''}`,
          inline: false,
        },
        {
          name: '🕒 IST Timestamp',
          value: getISTTimestamp(),
          inline: true,
        },
        {
          name: '🌐 User-Agent',
          value: `\`${device.ua.slice(0, 220)}\``,
          inline: false,
        },
      ],
    },
    `device access (${deviceLabel})`
  );
}
