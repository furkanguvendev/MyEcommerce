import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import { Roles } from '../types&enums/enums'
import { NavBar } from '../components/NavBar'
import { FooterSection } from '../layouts/FooterSection'

// Rol seçeneklerini enum'dan alıyoruz
const roleOptions = Object.entries(Roles).map(([label, value]) => ({
  label,
  value,
}))

// Form içi tüm alanları tanımlıyoruz
type FormInputs = {
  name: string
  email: string
  password: string
  confirmPassword: string
  role_id: number
  store?: {
    name: string
    phone: string
    tax_no: string
    bank_account: string
  }
}

// confirmPassword hariç tutulmuş versiyon (API'ye gönderilecek kısım)
type Payload = Omit<FormInputs, 'confirmPassword'>

export const SingUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      role_id: Roles.Customer, // varsayılan olarak "Customer" rolü seçili
    },
  })

  const selectedRole = watch('role_id')
  const passwordValue = watch('password')

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...rest } = data
    const payload: Payload = rest // ✅ confirmPassword burada çıkarıldı
    console.log(payload)
  }

  return (
    <div className='flex flex-col items-center'>
      <NavBar />
      <form className='flex flex-col w-4/5' onSubmit={handleSubmit(onSubmit)} noValidate>
        
        {/* İsim */}
        <label htmlFor="name">Adınızı Giriniz:</label>
        <input
          id="name"
          {...register('name', {
            required: 'İsim zorunludur',
            minLength: {
              value: 3,
              message: 'İsim en az 3 karakter olmalıdır',
            },
          })}
        />
        {errors.name && <p>{errors.name.message}</p>}

        {/* E-mail */}
        <label htmlFor="email">E-mail Adresinizi Giriniz:</label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email zorunludur',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Geçerli bir email adresi giriniz',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        {/* Şifre */}
        <label htmlFor="password">Şifre:</label>
        <input
          id="password"
          type="password"
          {...register('password', {
            required: 'Şifre zorunludur',
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
              message: 'Şifre en az 8 karakter, büyük/küçük harf, sayı ve özel karakter içermelidir',
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        {/* Şifre Tekrar */}
        <label htmlFor="confirmPassword">Şifre Tekrar:</label>
        <input
          id="confirmPassword"
          type="password"
          {...register('confirmPassword', {
            required: 'Şifre tekrar zorunludur',
            validate: (value) => value === passwordValue || 'Şifreler eşleşmiyor',
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        {/* Rol Seçimi */}
        <label htmlFor="role_id">Rol Seçiniz:</label>
        <select
          id="role_id"
          {...register('role_id', { valueAsNumber: true, required: true })}
        >
          {roleOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.role_id && <p>Rol seçimi zorunludur</p>}

        {/* Eğer seçilen rol "Store" ise mağaza bilgileri */}
        {selectedRole === Roles.Store && (
          <>
            <label>Mağaza Adı</label>
            <input
              {...register('store.name', {
                required: 'Mağaza adı zorunludur',
                minLength: {
                  value: 3,
                  message: 'Mağaza adı en az 3 karakter olmalıdır',
                },
              })}
              placeholder="Mağaza Adı"
            />
            {errors.store?.name && <p>{errors.store.name.message}</p>}

            <label>Telefon</label>
            <input
              {...register('store.phone', {
                required: 'Telefon zorunludur',
                pattern: {
                  value: /^(\+90|0)?5\d{9}$/,
                  message: 'Geçerli bir Türkiye telefon numarası giriniz',
                },
              })}
              placeholder="Telefon"
            />
            {errors.store?.phone && <p>{errors.store.phone.message}</p>}

            <label>Vergi No</label>
            <input
              {...register('store.tax_no', {
                required: 'Vergi no zorunludur',
                pattern: {
                  value: /^T\d{4}V\d{6}$/,
                  message: 'Vergi no “TXXXXVXXXXXX” formatında olmalıdır (X: rakam)',
                },
              })}
              placeholder="Vergi No"
            />
            {errors.store?.tax_no && <p>{errors.store.tax_no.message}</p>}

            <label>Banka Hesabı (IBAN)</label>
            <input
              {...register('store.bank_account', {
                required: 'IBAN zorunludur',
                pattern: {
                  value: /^TR\d{2}\d{5}\d{16}$/,
                  message: 'Geçerli bir Türkiye IBAN numarası giriniz',
                },
              })}
              placeholder="IBAN"
            />
            {errors.store?.bank_account && (
              <p>{errors.store.bank_account.message}</p>
            )}
          </>
        )}

        <button type="submit">Kaydol</button>
      </form>
      <FooterSection />
    </div>
  )
}
