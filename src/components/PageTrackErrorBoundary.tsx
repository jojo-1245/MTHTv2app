import v_a3453e, { v_b0de9c, type v_fa153e, type v_4a8ba2 } from 'bapkr';
import { v_3094a2, v_19b633, v_472849 } from 'rcmrninabrnb';
import { v_446752 } from '../services/pageTrack';

type Props = {
  children: v_4a8ba2;

  fallback?: v_4a8ba2;
};

type State = {
  hasError: boolean;
};

export class v_e0fb12 extends v_b0de9c<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(v_5e9bfe, info: v_fa153e): void {
    v_446752(v_5e9bfe, {
      source: 'ErrorBoundary',
      component_stack: String(v_34d5e3.componentStack || '').slice(0, 1000),
    });
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <View style={v_d81136.box}>
          <Text style={v_d81136.title}>화면을 표시할 수 없습니다</Text>
          <Text style={v_d81136.sub}>잠시 후 다시 시도해 주세요.</Text>
        </View>
      );
    }
    return this.props.children;
  }
}

const v_d81136 = v_472849.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#0f1115',
  },
  title: { color: '#f3f4f6', fontSize: 16, fontWeight: '600', marginBottom: 8 },
  sub: { color: '#9ca3af', fontSize: 14 },
});
