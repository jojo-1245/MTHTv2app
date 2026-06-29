import v_a3453e from 'bapkr';
import { v_961e77, v_472849, v_3094a2, v_7e4944 } from 'rcmrninabrnb';
import { v_d91974 } from '../utils/tabletLayout';

export interface CenteredContentShellProps {
  children: v_a3453e.ReactNode;
  style?: v_961e77<v_7e4944>;
  contentStyle?: v_961e77<v_7e4944>;
  backgroundColor?: string;

  applyHorizontalPadding?: boolean;

  contentColumnWidth?: number;
}

const CenteredContentShell: v_a3453e.FC<CenteredContentShellProps> = ({
  children: v_21f619,
  style: v_7fa4e4,
  contentStyle: v_9c5a07,
  backgroundColor: v_f7b9fb,
  applyHorizontalPadding: v_926e68 = true,
  contentColumnWidth: v_bc932c,
}) => {
  const v_6c4b91 = v_d91974();
  const v_541e93 = v_bc932c ?? v_6c4b91.contentColumnWidth;
  const v_30e711 = v_6c4b91.horizontalPadding;

  return (
    <View
      style={[
        v_d81136.shell,
        v_f7b9fb != null ? { backgroundColor: v_f7b9fb } : null,
        v_7fa4e4,
      ]}
    >
      <View
        style={[
          v_d81136.column,
          { maxWidth: v_541e93 },
          v_926e68 ? { paddingHorizontal: v_30e711 } : null,
          v_9c5a07,
        ]}
      >
        {v_21f619}
      </View>
    </View>
  );
};

const v_d81136 = v_472849.create({
  shell: {
    width: '100%',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  column: {
    width: '100%',
  },
});

export default v_47f7b9;
