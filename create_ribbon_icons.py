import os

ribbon_icons = {
    'ribbon-ielts.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M6 18v-3a12 12 0 0 1 24 0v3"/>
  <rect x="4" y="18" width="6" height="11" rx="3" fill="none"/>
  <rect x="26" y="18" width="6" height="11" rx="3" fill="none"/>
</svg>''',

    'ribbon-interview.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="13" cy="11" r="5"/>
  <path d="M5 28v-2a7 7 0 0 1 14 0v2"/>
  <path d="M22 7a4.5 4.5 0 0 1 0 9"/>
  <path d="M23 23a6 6 0 0 1 7 5v0"/>
</svg>''',

    'ribbon-career.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="6" y1="28" x2="30" y2="28"/>
  <rect x="8" y="21" width="4" height="7" rx="1"/>
  <rect x="15" y="15" width="4" height="13" rx="1"/>
  <rect x="22" y="9" width="4" height="19" rx="1"/>
</svg>''',

    'ribbon-spoken.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M27 16c0-5-4.5-9-10-9S7 11 7 16c0 2.2.9 4.3 2.5 5.8L8 27l5.5-1.8c1.1.5 2.3.8 3.5.8 5.5 0 10-4 10-10z"/>
</svg>'''
}

os.makedirs('assets/icons', exist_ok=True)
for name, svg in ribbon_icons.items():
    with open(os.path.join('assets/icons', name), 'w', encoding='utf-8') as f:
        f.write(svg)

print('Ribbon icons created successfully!')
