import os

icons = {
    'logo.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 54" fill="none">
  <!-- Chat Bubble Icon -->
  <rect x="2" y="4" width="44" height="42" rx="10" fill="#072218" stroke="#cbf438" stroke-width="2.5"/>
  <path d="M12 18H34M12 26H28M12 34H32" stroke="#cbf438" stroke-width="3" stroke-linecap="round"/>
  <path d="M22 46L28 53L32 46" fill="#072218" stroke="#cbf438" stroke-width="2.5" stroke-linejoin="round"/>
  <circle cx="34" cy="18" r="2.5" fill="#cbf438"/>
  <!-- Text -->
  <text x="56" y="26" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="20" font-weight="900" fill="#ffffff" letter-spacing="0.5">ENGLISH</text>
  <text x="56" y="43" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="16" font-weight="800" fill="#cbf438" letter-spacing="1.5">CORNER</text>
</svg>''',

    'ielts-icon.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <rect width="100" height="100" rx="20" fill="#e8f3fe"/>
  <!-- Passport background -->
  <rect x="36" y="28" width="46" height="58" rx="8" fill="#1e3a8a"/>
  <rect x="40" y="32" width="38" height="50" rx="6" fill="#2563eb" fill-opacity="0.2"/>
  <circle cx="59" cy="54" r="14" stroke="#93c5fd" stroke-width="2" fill="none"/>
  <path d="M59 40V68M45 54H73" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="2 2"/>
  <text x="59" y="80" font-family="sans-serif" font-size="7" font-weight="bold" fill="#bfdbfe" text-anchor="middle">PASSPORT</text>
  <!-- Airplane icon flying -->
  <path d="M14 45L40 38L62 20L68 23L52 46L72 52L77 47L82 49L77 59L46 60L28 72L23 70L30 56L14 49Z" fill="#1d4ed8"/>
</svg>''',

    'interview-icon.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <rect width="100" height="100" rx="20" fill="#fef2ec"/>
  <!-- Modern Executive Office Chair -->
  <rect x="34" y="16" width="32" height="34" rx="8" fill="#1e293b"/>
  <rect x="38" y="20" width="24" height="26" rx="4" fill="#334155"/>
  <rect x="28" y="50" width="44" height="10" rx="5" fill="#0f172a"/>
  <!-- Armrests -->
  <path d="M30 40V50M70 40V50" stroke="#475569" stroke-width="3" stroke-linecap="round"/>
  <!-- Cylinder pole -->
  <rect x="47" y="60" width="6" height="14" fill="#64748b"/>
  <!-- Star base -->
  <path d="M50 74L26 84M50 74L74 84M50 74V86" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/>
  <circle cx="25" cy="85" r="3.5" fill="#0f172a"/>
  <circle cx="75" cy="85" r="3.5" fill="#0f172a"/>
  <circle cx="50" cy="88" r="3.5" fill="#0f172a"/>
</svg>''',

    'career-icon.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <rect width="100" height="100" rx="20" fill="#f5edf9"/>
  <!-- 3D Bar chart growth -->
  <rect x="20" y="62" width="12" height="22" rx="3" fill="#c084fc"/>
  <rect x="36" y="48" width="12" height="36" rx="3" fill="#a855f7"/>
  <rect x="52" y="34" width="12" height="50" rx="3" fill="#9333ea"/>
  <rect x="68" y="20" width="12" height="64" rx="3" fill="#7e22ce"/>
  <!-- Upward trend arrow -->
  <path d="M22 54L38 40L54 28L72 14" stroke="#e11d48" stroke-width="4" stroke-linecap="round"/>
  <path d="M60 14H73V27" stroke="#e11d48" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>''',

    'spoken-icon.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <rect width="100" height="100" rx="20" fill="#e8fbf3"/>
  <!-- Speech bubbles -->
  <rect x="20" y="22" width="54" height="38" rx="14" fill="#10b981"/>
  <path d="M30 60L22 72L40 60" fill="#10b981"/>
  <circle cx="34" cy="41" r="3" fill="#ffffff"/>
  <circle cx="47" cy="41" r="3" fill="#ffffff"/>
  <circle cx="60" cy="41" r="3" fill="#ffffff"/>
  <rect x="42" y="42" width="40" height="30" rx="10" fill="#047857"/>
  <path d="M70 72L76 80L64 72" fill="#047857"/>
  <!-- Heart or sparkles inside -->
  <path d="M62 50C60 48 56 50 56 53C56 57 62 61 62 61C62 61 68 57 68 53C68 50 64 48 62 50Z" fill="#a7f3d0"/>
</svg>''',

    'checklist-3d.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <!-- Clipboard board -->
  <rect x="22" y="16" width="56" height="72" rx="10" fill="#94a3b8"/>
  <rect x="25" y="20" width="50" height="64" rx="8" fill="#ffffff"/>
  <!-- Clip -->
  <rect x="36" y="10" width="28" height="12" rx="4" fill="#475569"/>
  <circle cx="50" cy="16" r="3" fill="#cbd5e1"/>
  <!-- Checked rows -->
  <rect x="32" y="30" width="10" height="10" rx="3" fill="#cbf438"/>
  <path d="M34 35L37 38L41 33" stroke="#061a14" stroke-width="1.8" stroke-linecap="round"/>
  <rect x="46" y="33" width="24" height="4" rx="2" fill="#cbd5e1"/>

  <rect x="32" y="46" width="10" height="10" rx="3" fill="#cbf438"/>
  <path d="M34 51L37 54L41 49" stroke="#061a14" stroke-width="1.8" stroke-linecap="round"/>
  <rect x="46" y="49" width="22" height="4" rx="2" fill="#cbd5e1"/>

  <rect x="32" y="62" width="10" height="10" rx="3" fill="#cbf438"/>
  <path d="M34 67L37 70L41 65" stroke="#061a14" stroke-width="1.8" stroke-linecap="round"/>
  <rect x="46" y="65" width="26" height="4" rx="2" fill="#cbd5e1"/>

  <!-- Pen angled -->
  <rect x="70" y="45" width="8" height="34" rx="2" fill="#eab308" transform="rotate(-30 70 45)"/>
  <path d="M78 78L71 77L74 71Z" fill="#10b981"/>
</svg>''',

    'grad-cap-3d.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
  <!-- Books stack -->
  <rect x="20" y="64" width="60" height="12" rx="4" fill="#0284c7"/>
  <rect x="24" y="66" width="52" height="8" rx="2" fill="#ffffff" opacity="0.9"/>
  <rect x="26" y="54" width="48" height="10" rx="3" fill="#059669"/>
  <rect x="28" y="56" width="44" height="6" rx="2" fill="#ffffff" opacity="0.9"/>
  <!-- Mortarboard cap -->
  <polygon points="50,22 86,34 50,46 14,34" fill="#0f172a"/>
  <polygon points="50,25 80,34 50,43 20,34" fill="#1e293b"/>
  <!-- Skull cap underneath -->
  <path d="M32 39C32 48 40 54 50 54C60 54 68 48 68 39" fill="#0f172a"/>
  <!-- Tassel -->
  <circle cx="50" cy="34" r="3" fill="#cbf438"/>
  <path d="M50 34L68 44V56" stroke="#cbf438" stroke-width="2.5" fill="none"/>
  <rect x="66" y="54" width="4" height="8" rx="2" fill="#cbf438"/>
</svg>''',

    'crown.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#cbf438">
  <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5ZM19 19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V18H19V19Z"/>
</svg>'''
}

os.makedirs('assets/icons', exist_ok=True)
for fname, content in icons.items():
    path = os.path.join('assets/icons', fname)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Generated {len(icons)} SVG icons successfully.")
