/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
'use client';

import React, { useMemo, useState } from 'react';
import useuseRentModal from '@/app/hooks/useRentModal';
import Modal from './modal-component';
import Heading from '../heading-component';
import { categories } from '../navbar/category-component';
import CategoryInput from '../inputs/category-input-component';
import { FieldValues, useForm } from 'react-hook-form';

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IAMGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal = () => {
  const rentModal = useuseRentModal();

  const [step, setStep] = useState(STEPS.CATEGORY);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      category: '',
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: '',
      price: 1,
      title: '',
      description: '',
    },
  });

  const category = watch('category');

  const setCustomValue = (id: string, value: any) => {
    console.log('id', id, 'value', value);
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return 'Create';
    }
    return 'Next';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }

    return 'Back';
  }, [step]);

  const bodyContent = (
    <div className="flex flex-col gap-0">
      <Heading title="Which of these best describes your place?" subtitle="Pick a category" />
      <div className="grid grid-col-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
        {categories.map((item) => {
          console.log('item label', item.label);
          console.log('catgegory', category);
          console.log('condtion', category === item.label);
          return (
            <div key={item.label} className="col-span-1">
              <CategoryInput
                onClick={(ctgry) => setCustomValue('category', ctgry)}
                selected={category === item.label}
                label={item.label}
                icon={item.icon}
              />
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      title="Airbnb your home"
      body={bodyContent}
    />
  );
};

export default RentModal;
