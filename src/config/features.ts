// Feature flags configuration
export const features = {
  // Consultation page feature flag
  consultation: {
    enabled: false, // Set to true when consultation is ready
    comingSoon: true, // Show coming soon page when disabled
  },

  // Other feature flags can be added here
  // vipProgram: {
  //   enabled: true,
  // },
  // successStories: {
  //   enabled: false,
  // },
} as const;

export type FeatureConfig = typeof features;
