export function recommendStack(input = {}) {
  const size = input.size || 'unknown';
  const flow = input.flow || 'unknown';
  const asyncComplexity = input.asyncComplexity || 'unknown';
  const preference = input.preference;

  let stateManagement = 'Cubit';
  const reasons = [];

  if (preference && ['Provider', 'Riverpod', 'Bloc', 'Cubit'].includes(preference)) {
    stateManagement = preference;
    reasons.push(`Explicit preference: ${preference}.`);
  } else if (flow === 'event-heavy') {
    stateManagement = 'Bloc';
    reasons.push('Event-heavy flow benefits from explicit event/state modeling.');
  } else if (asyncComplexity === 'complex') {
    stateManagement = 'Riverpod';
    reasons.push('Complex async/provider graph benefits from Riverpod composition.');
  } else if (size === 'small' && flow === 'simple') {
    stateManagement = 'Provider';
    reasons.push('Small app with simple local state can stay lightweight.');
  } else {
    reasons.push('Defaulting to Cubit for clear state transitions with moderate boilerplate.');
  }

  const packages = [
    'get_it',
    'dio',
    'freezed_annotation',
    'json_annotation',
    'go_router',
    'shared_preferences',
    'flutter_secure_storage',
    'logger',
    'mocktail'
  ];
  const devPackages = ['build_runner', 'freezed', 'json_serializable'];

  if (stateManagement === 'Provider') packages.push('provider');
  if (stateManagement === 'Riverpod') packages.push('flutter_riverpod');
  if (stateManagement === 'Bloc' || stateManagement === 'Cubit') {
    packages.push('flutter_bloc');
    devPackages.push('bloc_test');
  }

  return {
    stateManagement,
    reasons,
    packages,
    devPackages,
    notes: [
      'Use latest stable package versions when creating a project, then pin with pubspec.lock.',
      'Run flutter pub outdated during controlled update work.'
    ]
  };
}
