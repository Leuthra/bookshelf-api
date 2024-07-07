import { defineConfigWithTheme } from 'vitepress'
import vitepressHelper, { config } from '@huyikai/vitepress-helper';

const vitepressHelperConfig = {
  directory: 'docs',
  collapsible: true
};

// https://vitepress.dev/reference/site-config
const vitepressConfig = {
  base: '/',
  title: "Bookshelf API",
  description: "Tutorial sederhana yang akan mengajari kamu cara membuat Bookshelf API",
  themeConfig: {
    siteTitle: "Bookshelf API",
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/leuthra/bookshelf-api' }
    ],
    docFooter: {
      prev: 'Kembali',
      next: 'Selanjutnya'
    },
    footer: {
      message: '',
      copyright: 'Copyright © 2024 - by Romi Muharom'
    }
  }
}

export default async () => {
  const instance: any = await vitepressHelper({
    ...vitepressHelperConfig,
    ...vitepressConfig
  });
  return defineConfigWithTheme({ extends: config, ...instance });
};