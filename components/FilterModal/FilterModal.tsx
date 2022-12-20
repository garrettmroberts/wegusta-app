import { useContext, useEffect } from 'react';
import { Pressable, Text, View, Modal } from 'react-native';
import { AppContext } from '../../utils/Context/Context';
import CustomSlider from '../CustomSlider/CustomSlider';
import styles from './styles';

type FilterModalType = {
    isVisible: boolean,
    onClose: () => void
}

const FilterModal = ({isVisible, onClose}: FilterModalType) => {  
  const { context, dispatch } = useContext(AppContext);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                onClose();
            }}
        >
            <View style={styles.modal}>
                <View style={styles.modalBody}>
                    <Text style={styles.header}>Filters</Text>
                    <CustomSlider title='Distance' min={0} max={20} units='miles' />
                    <View style={styles.buttonWrapper}>
                        <Pressable
                            onPress={() => {
                                onClose();
                                dispatch({type: 'updateFilterDistance', payload: 5})
                            }}
                        >
                            <Text style={styles.clearButton}>Clear all</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => onClose()}
                        >
                            <View style={styles.continueButton}>
                                <Text style={styles.continueButtonText}>Apply</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
};

export default FilterModal;